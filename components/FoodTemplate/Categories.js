import React from 'react';
import Image from "next/image";
import Link from "next/link";


const Categories = ({title, description, img, link}) => {

	return (
		<div className="flex p-4 bg-slate-50 hover:bg-slate-100 cursor-pointer
			 transition duration-300 rounded-md my-4 mx-4 hover:shadow-md">
			<Link href={"/" + link}>
				<a>
					<Image src={img} alt="food" className="h-6 w-6 rounded-md" width="24" height="24"/>
					<ul className="flex">
						<li className="px-2 ml-8">{title}</li>
						{/*<li className="px-2">{description}</li>*/}
					</ul>
				</a>
			</Link>
		</div>
	);
};

export default Categories;
