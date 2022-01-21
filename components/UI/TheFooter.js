import React, {useContext} from 'react';
import { MdAccountCircle, MdQuickreply, MdShoppingBasket } from "react-icons/md";
import Link from "next/link";
import {ValueContext} from "../../context/ValueContext";



const TheFooter = () => {

	const {initialValue, setInitialValue} = useContext(ValueContext);
	// console.log(initialValue);

	return (
		// todo reparat position footer
		<div className='flex items-center sticky bottom-0 left-0 bg-slate-50 absolute'>
			<Link href="/">
				<a>
					<button className='bg-pink-200 mx-4 px-4 py-2 rounded-md'>
						Home
					</button>
				</a>
			</Link>

			<ul className='flex flex-1 pl-4'>
				<li className='basis-1/3 cursor-pointer'>
					<div className='flex'>
						<MdShoppingBasket />
						<span>{initialValue}</span>
					</div>

				</li>
				<li className='basis-1/3'><MdQuickreply /></li>
				<li className='basis-1/3'><MdAccountCircle /></li>
			</ul>
		</div>
	);
};

export default TheFooter;
