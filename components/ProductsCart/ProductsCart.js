import React, {useContext} from 'react';
import {ValueContext} from "../../context/ValueContext";
import Link from "next/link";

const ProductsCart = () => {
	const {initialValue, setInitialValue} = useContext(ValueContext);
	const value = ((initialValue * Math.PI / Math.random()) / Math.random()).toFixed(2);
	return (
		<div className='absolute bottom-10 right-1 md:right-10 rounded-md  bg-primary text-white h-48 w-[300px]
		flex items-center justify-center opacity-100' data-testid='product-cart'>
			<div className='flex flex-col' data-testid='cart'>
				<p data-testid=''>{initialValue} items = {value} &euro;</p>
				<br/>
				<hr/>
				<div className='flex justify-between' data-testid='cart-value'>
					<p>Total </p>
					<p data-testid='value-cart'>  {value} &euro;</p>
				</div>
				{value == 0 ?
					<div className='bg-white text-primary my-4 rounded-md' data-testid='link-login'>
								<p className='py-2 px-2'> No orders yet </p>
					</div>
					:
					<div className='bg-white text-primary my-4 rounded-md' data-testid='link-login'>
						<Link href="/login">
							<a >
								<p className='py-2 px-2'> Place my order </p>
							</a>
						</Link>
					</div>
				}
			</div>

		</div>
	);
};

export default ProductsCart;
