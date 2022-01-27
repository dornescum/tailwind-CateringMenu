import React, {useContext, useState} from 'react';
import { MdAccountCircle, MdQuickreply, MdShoppingBasket, MdHouse } from "react-icons/md";
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
		<div className='flex items-center sticky
		 bottom-0 left-0 bg-slate-50 absolute z-10'>

			<ul className='flex flex-1 pl-4 relative mx-2 md:mx-48 pt-2' >
				<li className='basis-1/3 cursor-pointer '>
					<Link href="/">
						<a>
							<div className='flex justify-center items-center'>
								<button className=''>
									<MdHouse className='h-8 w-8 text-gray-600'/>
								</button>
							</div>
						</a>
					</Link>
				</li>

				<li className='basis-1/3 cursor-pointer'>
					<Link href="/login">
						<a>
							<div className='flex justify-center items-center'>
								<button className=''>
									<MdQuickreply className='h-8 w-8 text-gray-600'/>
								</button>
							</div>

						</a>
					</Link>
				</li>
				<li className='basis-1/3 cursor-pointer'>
					<Link href="/login">
						<a className='mx-auto'>
							<div className='flex items-center justify-center'>
								<button className=''>
									<MdAccountCircle className='h-8 w-8 text-gray-600'/>
								</button>
							</div>
						</a>
					</Link>
				</li>
				<li className='basis-1/3 cursor-pointer' onClick={handleCartInfo}>
					<div className='flex items-center justify-center'>
						<MdShoppingBasket className='h-8 w-8 text-gray-600'/>
						<span className='bg-primary text-white rounded-full absolute bottom-5
						right-4 md:right-6 lg:right-14 xl:right-20 xl:mr-2 h-6 w-6 flex justify-center items-center'>{initialValue}</span>
						{showCart && <ProductsCart />}
					</div>
				</li>
			</ul>
		</div>
	);
};

export default TheFooter;
