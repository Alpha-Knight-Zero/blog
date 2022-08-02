import React from 'react';
import { getPosts, getPostDetails } from '../../services';
import {
	Postdetail,
	Categories,
	PostWidget,
	Author,
	Comments,
	CommentsForm,
} from '../../components';

const PostDetails = () => {
	return (
		<div className='container px-10 mx-auto mb-8'>
			<div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
				<div className='col-span-1 lg:col-span-8'>
					<Postdetail />
					<Author />
					<Comments />
					<CommentsForm />
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

export default PostDetails;
