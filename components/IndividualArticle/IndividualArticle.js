import React from 'react';
import Link from "next/link";
import Image from "next/image";

const IndividualArticle = ({title, description, img, id, price}) => {

	// const prices = Math.floor(Math.random() * 100);

	return (<div className="p-1  bg-slate-100 rounded-md shadow-md" data-testid={id}>
			<div className="mb-4 h-48" data-testid={title?.slice(0,4)}>
				<h3 className="mb-3 text-2xl flex justify-center items-center" data-testid={title?.slice(1,4)}>{title.slice(0, 10)}</h3>
				<p className="text-justify" data-testid={description?.slice(1,4)}>{description}</p>
			</div>
			<div className="py-2 md:py-6 px-1 my-2 mt-6 flex flex-col lg:flex-row justify-between" data-testid={description?.slice(7,15)}>
				<p className="font-bold">More info here ...</p>
				<p className={`font-bold px-1 rounded-sm ${price > 20 ? 'bg-yellow-200' : 'bg-green-300 animate-pulse'}`}>Price {price} </p>
			</div>
			<div className="relative">
				<p className="absolute top-10 left-10 z-10 text-white text-2xl animate-pulse" data-testid={title?.slice(0,9)}>
					buy it!
				</p>
				<Image src={img} alt={title}
					   className="rounded-md w-24 h-24 object-cover" width="880" height="680" data-testid={title?.slice(2,6)}/>
			</div>
		</div>
	);
};

export default IndividualArticle;
