import moment from 'moment';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';
import Image from 'next/image';

const PostWidget = ({ categories, slug }) => {
	const [relatedPosts, setRelatedPosts] = useState([]);

	useEffect(() => {
		if (slug) {
			getSimilarPosts(categories, slug).then((data) => {
				setRelatedPosts(data);
			});
		} else {
			getRecentPosts().then((posts) => {
				setRelatedPosts(posts);
			});
		}
	}, [slug]);

	return (
		<div className='p-8 mb-8 bg-white rounded-lg shadow-lg'>
			<h3 className='pb-4 mb-8 text-xl font-semibold border-b '>
				{slug ? 'Related Posts' : 'Recent Posts'}
			</h3>
			{relatedPosts.map((post) => (
				<div key={post.name} className='flex items-center w-full mb-4'>
					<div className='flex-none w-16'>
						<Image
							alt={post.name}
							src={post.featuredImage.url}
							loading='lazy'
							width={60}
							height={60}
							className='align-middle rounded-full'
						/>
					</div>
					<div className='flex-grow ml-4'>
						<p className='text-sm font-semibold font-xs'>
							{moment(post.createdAt).format('DD-MMM-YYYY')}
						</p>
						<Link href={`/post/${post.slug}`} className='text-md'>
							{post.name}
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default PostWidget;
