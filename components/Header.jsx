import React from 'react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';

const Header = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((data) => {
			setCategories(data);
		});
	}, []);

	return (
		<div className='container px-10 mx-auto mb-8'>
			<div className='inline-block w-full py-8 border-b border-blue-400'>
				<div className='block md:float-left'>
					<Link href='/'>
						<span className='text-4xl font-bold text-white cursor-pointer'>
							Pushkal's Web Blog
						</span>
					</Link>
				</div>
				<div className='hidden md:float-left md:contents'>
					{Categories.map((category) => (
						<Link
							href={`/category/${category.slug}`}
							key={category.slug}
						>
							<span className='mt-2 ml-4 font-semibold text-white align-middle cursor-pointer md:float-right'>
								{category.name}
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
