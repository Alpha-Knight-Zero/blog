/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and  *
 * will be treated as an API endpoint instead of a page.         *
 *************/

import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_API;

// export a default function for API route to work
export default async function asynchandler(req, res) {
	const graphQLClient = new GraphQLClient(graphqlAPI, {
		headers: {
			authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
		},
	});

	const { name, email, comment, slug } = req.body;

	const query = gql`
		mutation CreateComment(
			$name: String!
			$email: String!
			$comment: String!
			$slug: String!
		) {
			createComment(
				data: {
					name: $name
					email: $email
					comment: $comment
					post: { connect: { slug: $slug } }
				}
			) {
				id
			}
		}
	`;

	try {
		const result = await graphQLClient.request(query, {
			name,
			email,
			comment,
			slug,
		});
		return res.status(200).send(result);
	} catch (error) {
		return res.status(400).send(error);
	}
}
