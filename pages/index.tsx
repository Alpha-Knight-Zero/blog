import type { NextPage } from 'next';
import Head from 'next/head';
import { PostCard, Categories, PostWidget, Header } from '../components';

const posts = [
	{ title: 'Hello Next.js', author: 'Sara' },
	{
		title: 'Learn Next.js is awesome',
		author: 'Radha',
	},
];

const Home: NextPage = () => {
	return (
		<div className='container px-10 mx-auto mb-8 '>
			<Head>
				<title>Blog by Pushkal</title>
			</Head>

			<div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
				<div className='col-span-1 lg:col-span-8'>
					{posts.map((post) => (
						<PostCard post={post} key={post.title} />
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
