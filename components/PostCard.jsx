import React from 'react';

const PostCard = ({ post }) => {
	return (
		<div>
			{post.title}
			{post.author}
		</div>
	);
};

export default PostCard;
