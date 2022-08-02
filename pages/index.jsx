import Head from 'next/head';
import {
	PostCard,
	Categories,
	PostWidget,
	Header,
	Layout,
} from '../components';
import { getPosts } from '../services';
import { FeaturedPosts, AdjacentPosts } from '../sections';

const Home = ({ posts }) => {
	return (
		<div className='container px-10 mx-auto mb-8 '>
			<Head>
				<title>Blog by Pushkal</title>
			</Head>
			<FeaturedPosts />
			<div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
				<div className='col-span-1 lg:col-span-8'>
					{posts.map((post) => (
						<PostCard post={post.node} key={post.node.name} />
					))}
				</div>
				<div className='col-span-1 lg:col-span-4'>
					<div className='relative lg:sticky top-8'>
						<PostWidget />
						<Categories />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

export async function getStaticProps() {
	const posts = (await getPosts()) || [];

	return {
		props: {
			posts,
		},
	};
}
