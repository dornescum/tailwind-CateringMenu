import React from 'react';

const Categories = ({title, description, img}) => {
	return (
		<div className='flex'>
			<img src={img} alt="food"/>
			<ul>
				<li>{title}</li>
				<li>{description}</li>
			</ul>

		</div>
	);
};

export default Categories;
