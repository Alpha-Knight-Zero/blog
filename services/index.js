import { gql, request } from 'graphql-request';

const grapgqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_API;

export const getPosts = async () => {
	const query = gql`
		query MyQuery {
			postsConnection {
				edges {
					node {
						slug
						author {
							bio
							name
							id
							photo {
								url
							}
						}
						createdAt
						excerpt
						name
						featuredImage {
							url
						}
						categories {
							slug
							name
						}
					}
				}
			}
		}
	`;

	const results = await request(grapgqlAPI, query);

	return results.postsConnection.edges;
};
