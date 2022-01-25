import React, {useContext} from 'react';
import {ValueContext} from "../../context/ValueContext";

const ProductsCart = () => {
	const {initialValue, setInitialValue} = useContext(ValueContext);
	const value = ((initialValue * Math.PI / Math.random()) / Math.random()).toFixed(2);

	return (
		<div className='absolute bottom-10 -left-10 rounded-md  bg-primary text-white h-24 w-48 flex items-center justify-center opacity-100'>
			<p>{initialValue} items = {value} &euro;</p>
		</div>
	);
};

export default ProductsCart;
