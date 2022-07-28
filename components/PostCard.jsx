import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

const PostCard = ({ post }) => {
	return (
		<div className='p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8'>
			<div className='relative mb-6 overflow-hidden shadow-md pb-80'>
				<Image
					src={post.featuredImage.url}
					alt={post.name}
					loading='lazy'
					layout='fill'
					className='absolute object-cover object-top rounded-t-lg shadow-lg lg:rounded-lg'
				/>
			</div>
			<h1 className='mb-8 text-3xl font-semibold text-center transition duration-700 cursor-pointer hover:text-pink-600'>
				<Link href={`/post/${post.slug}`}>
					<a>{post.name}</a>
				</Link>
			</h1>
		</div>
	);
};

export default PostCard;
