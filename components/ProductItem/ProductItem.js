import React from 'react';
import Link from "next/link";

const ProductItem = ({img, title, subtitle, desc, id}) => {
	return (
		<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
			<div className="md:flex">
				<div className="md:shrink-0">
					<img className="h-48 w-full object-cover md:h-full md:w-48
					brightness-200 md:brightness-50" src={img}
						 alt={title} />
				</div>
				<div className="p-8">
					<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
					<a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{subtitle}</a>
					<p className="mt-2 text-gray-500">{desc}.</p>
					<Link href={`/products/${id}`}>
						{title}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
