import React, {useContext} from 'react';
import { MdAccountCircle, MdQuickreply, MdShoppingBasket } from "react-icons/md";
import Link from "next/link";
import {ValueContext} from "../../context/ValueContext";



const TheFooter = () => {

	const {initialValue, setInitialValue} = useContext(ValueContext);
	// console.log(initialValue);

	return (
		// todo reparat position footer
		<div className='flex items-center sticky bottom-0 left-0 bg-slate-50 absolute z-10'>
			<Link href="/">
				<a>
					<button className='bg-primary mx-4 px-4 py-2 rounded-md'>
						Home
					</button>
				</a>
			</Link>

			<ul className='flex flex-1 pl-4 relative' >
				<li className='basis-1/3 cursor-pointer'>
					<div className='flex'>
						<MdShoppingBasket />
						<span className='bg-primary text-white rounded-full absolute bottom-3 left-8 h-6 w-6 flex justify-center items-center'>{initialValue}</span>
					</div>

				</li>
				<li className='basis-1/3'><MdQuickreply /></li>
				<li className='basis-1/3'><MdAccountCircle /></li>
			</ul>
		</div>
	);
};

export default TheFooter;
