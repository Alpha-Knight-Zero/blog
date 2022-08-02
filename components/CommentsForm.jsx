import React, { useState, useEffect, useRef } from 'react';

const CommentsForm = ({ slug }) => {
	const [error, setError] = useState(false);
	const [localStrorage, setLocalStorage] = useState(null);
	const [showSuccess, setShowSuccess] = useState(false);

	const commentEL = useRef();
	const nameEL = useRef();
	const emailEL = useRef();
	const storeDataEL = useRef();

	const handlePostSubmission = async (e) => {
		setError(false);

		const { value: name } = nameEL.current;
		const { value: email } = emailEL.current;
		const { value: comment } = commentEL.current;
		const { checked: storeData } = storeDataEL.current;

		if (!name || !email || !comment) {
			setError(true);
			return;
		}

		const commentObj = {
			name,
			email,
			comment,
			slug,
		};

		if (storeData) {
			localStorage.setItem('name', name);
			localStorage.setItem('email', email);
		} else {
			localStorage.removeItem('name');
			localStorage.removeItem('email');
		}
	};

	return (
		<div className='p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg'>
			<h1 className='pb-4 mb-8 text-xl font-semibold border-b'>
				Leave a Comment
			</h1>
			<div className='grid grid-cols-1 gap-4 mb-4'>
				<textarea
					ref={commentEL}
					className='w-full h-40 p-4 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200'
					name='comment'
					placeholder='Comment'
				/>
			</div>
			<div className='grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2'>
				<input
					type='text'
					ref={nameEL}
					className='w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200'
					placeholder='Name'
					name='name'
				/>
				<input
					type='email'
					ref={emailEL}
					className='w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200'
					placeholder='Email'
					name='email'
				/>
			</div>
			<div className='grid grid-cols-1 gap-4 mb-4'>
				<div>
					<input
						ref={storeDataEL}
						type='checkbox'
						id='storeData'
						name='storeData'
						value='true'
					/>
					<label
						className='ml-2 text-gray-500 cursor-pointer'
						htmlFor='storeData'
					>
						Save my name, email in this browser for the next time I
						comment.
					</label>
				</div>
			</div>
			{error && (
				<p className='text-xs text-red-500'>All fields are required.</p>
			)}
			<div className='mt-8'>
				<button
					type='button'
					onClick={handlePostSubmission}
					className='inline-block px-8 py-3 text-lg font-medium text-white transition duration-500 bg-pink-600 rounded-full cursor-pointer ease hover:bg-indigo-900'
				>
					Post Comment
				</button>
				{showSuccess && (
					<span className='float-right mt-3 text-xl font-semibold text-green-500'>
						Comment submitted for review.
					</span>
				)}
			</div>
		</div>
	);
};

export default CommentsForm;
