import React from 'react';
import { MdAccountCircle, MdQuickreply, MdShoppingBasket } from "react-icons/md";

const TheFooter = () => {
	return (
		// todo reparat position footer
		<div className='flex items-center sticky bottom-0 left-0 bg-slate-50 absolute'>
			<button className='bg-pink-200 mx-4 px-4 py-2 rounded-md'>
				Home
			</button>
			<ul className='flex flex-1'>
				<li className='basis-1/3'><MdShoppingBasket /></li>
				<li className='basis-1/3'><MdQuickreply /></li>
				<li className='basis-1/3'><MdAccountCircle /></li>
			</ul>
		</div>
	);
};

export default TheFooter;
