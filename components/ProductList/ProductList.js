import React from 'react';
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({title, subtitle, desc}) => {
	const products = [
		{id:1, title:'some title', subtitle:'some subtitle', desc:'some description'},
		{id:2, title:'some title 2', subtitle:'some subtitle 2', desc:'some description 2'},
		{id:3, title:'some title 3', subtitle:'some subtitle 3', desc:'some description 3'},
	]
	return (
		<div>
			<ul>
				{products.map((item)=>{
					return <ProductItem title={item.title} subtitle={item.subtitle} desc={item.desc}/>
				})}

			</ul>
		</div>
	);
};

export default ProductList;
