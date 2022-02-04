import React from 'react';
import Link from "next/link";
import Image from "next/image";

const IndividualArticle = ({title, description, img, id, price, subtitle, ingredients}) => {


	return (<div className="p-1  bg-slate-100 rounded-md shadow-md font-dosis lg:text-xl" data-testid={id}>
			<div className="mb-4 h-96 md:h-[400px] relative" data-testid={title?.slice(0,4)}>
				<div>
					<h3 className="mb-3 text-2xl flex justify-center items-center" data-testid={title?.slice(1,4)}>{title}</h3>
					<p className="text-justify" data-testid={description?.slice(1,4)}>{description.slice(0,200)} ...</p>
				</div>
				<div className='py-4'>
					<p className='py-1'> # {subtitle}</p>
					<p className='py-1'><span className='font-medium'>Ingredients</span> : {ingredients}.</p>
				</div>
				<div className="absolute bottom-0 w-full py-1 flex flex-col lg:flex-row justify-between" data-testid={description?.slice(7,15)}>
					<p className="font-bold">More info here ...</p>
					<p className={`font-bold  rounded-sm ${price > 10 ? 'bg-yellow-200' : 'bg-green-300 animate-pulse'}`}>Price {price} $</p>
				</div>
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
