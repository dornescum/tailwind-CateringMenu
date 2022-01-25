import React, {useContext, useState} from 'react';
import { MdAccountCircle, MdQuickreply, MdShoppingBasket } from "react-icons/md";
import Link from "next/link";
import {ValueContext} from "../../context/ValueContext";
import ProductsCart from "../ProductsCart/ProductsCart";

const TheFooter = () => {

	const {initialValue, setInitialValue} = useContext(ValueContext);
	const [showCart, setShowCart]=useState(false);

	const handleCartInfo =()=>{
		setShowCart(!showCart)
	}


	return (
		<div className='flex items-center sticky bottom-0 left-0 bg-slate-50 absolute z-10'>
			<Link href="/">
				<a>
					<button className='bg-primary mx-4 px-4 py-2 rounded-md'>
						Home
					</button>
				</a>
			</Link>

			<ul className='flex flex-1 pl-4 relative' >
				<li className='basis-1/3 cursor-pointer' onClick={handleCartInfo}>
					<div className='flex'>
						<MdShoppingBasket />
						<span className='bg-primary text-white rounded-full absolute bottom-3
						left-8 h-6 w-6 flex justify-center items-center'>{initialValue}</span>
						{showCart && <ProductsCart />}
					</div>

				</li>
				<li className='basis-1/3 cursor-pointer'><MdQuickreply /></li>
				<li className='basis-1/3 cursor-pointer'><MdAccountCircle /></li>
			</ul>
		</div>
	);
};

export default TheFooter;
