import React from 'react';

const Categories = ({title, description, img}) => {

	return (

			<div className="flex p-4 bg-slate-50 rounded-md my-4 mx-4">
				<img src={img} alt="food" className="h-6 w-6"/>
				<ul className="flex">
					<li className="px-2 ml-8">{title}</li>
					<li className="px-2">{description}</li>
				</ul>
			</div>


	);
};

export default Categories;
