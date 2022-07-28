import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

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
						<div>
							{post.title}
							{post.author}
						</div>
					))}
				</div>
				<div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
            
          </div>
				</div>
			</div>
		</div>
	);
};

export default Home;
