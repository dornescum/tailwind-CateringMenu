import React from 'react';
import Image from "next/image";
import Link from "next/link";


const Categories = ({title, description, img, link}) => {

	return (
		<div className="flex p-4 bg-slate-50 hover:bg-slate-100 cursor-pointer
			 transition duration-300 rounded-md my-4 mx-2 hover:shadow-md h-48">
			<Link href={"/" + link}>
				<a className="flex w-full">
					<div className="basis-1/2 w-full flex justify-center items-center">
						<Image src={img} alt="food" className="rounded-md object-cover" width="150"
							   height="150"/>
					</div>
					<div className="basis-1/2">
						<ul className="flex flex-col p-1 w-full justify-center items-center h-36">
							<li className={`px-2 pb-2 ${title === 'Beef' ? "capitalize underline italic text-pink-300" : ""}`}>{title}</li>
							<li className="px-2 py-1 hover:text-pink-300"># {description.split(', ').join(' #')}</li>
						</ul>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default Categories;
