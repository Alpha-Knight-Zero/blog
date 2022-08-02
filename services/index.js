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

export const getPostDetails = async (slug) => {
	const query = gql`
		query GetPostDetails($slug: String!) {
			post(where: { slug: $slug }) {
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
				content {
					raw
				}
			}
		}
	`;

	const results = await request(grapgqlAPI, query, { slug });

	return results.post;
};

export const getRecentPosts = async () => {
	const query = gql`
		query getPostDetails(){
posts(
	first:3
	orderBy: createdAt_DESC
){
	name
	featuredImage{
		url
	}
	createdAt
	slug
}
		}`;

	const results = await request(grapgqlAPI, query);

	return results.posts;
};

export const getSimilarPosts = async ({ categories, slug }) => {
	const query = gql`
		query getPostDetails($slug: String!, $categories: [String!]) {
			posts(where{slug_not: $slug, AND:{categories_some: {slug_in:$categories}}}
				last:3
				) {
				name
				featuredImage {
					url
				}
				createdAt
				slug
			}
		}
	`;

	const results = await request(grapgqlAPI, query, { categories, slug });

	return results.posts;
};

export const getCategories = async () => {
	const query = gql`
		query getCategories {
			categories {
				name
				slug
			}
		}
	`;

	const results = await request(grapgqlAPI, query);

	return results.categories;
};
