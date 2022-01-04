import React from 'react';
import Link from "next/link";
import Image from "next/image";

const ProductItem = ({img, title, subtitle, desc, id}) => {
	return (
		<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
			<div className="md:flex">
				<div className="md:shrink-0">
					{/*md:w-48 h-48*/}
					<Image className="w-full object-cover md:h-full block
					brightness-200 md:brightness-50 md:w-48 h-48" src={img}  width={200} height={200}
						 alt={title} />
				</div>
				<div className="p-8">
					<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
					<a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{subtitle}</a>
					<p className="mt-2 text-gray-500">{desc}.</p>
					<Link href={`/products/${id}`} >
						<a className='bg-gray-300 mx-4'>{title}</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
