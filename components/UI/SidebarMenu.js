import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { MdChevronRight } from "react-icons/md";
import Logo from '../../public/assets/svg/food-donation-svgrepo-com.svg';
import ChevronRight from "../../assets-next/icons/ChevronRight";




const menus =[
	{id:"m1", title:"Home", link:"/"},
	{id:"m2", title:"Salads", link:"/products"},
	{id:"m3", title:"Soups", link:"/soups"},
	{id:"m4", title:"Pasta", link:"/pasta"},
	{id:"m5", title:"Burgers", link:"/burgers"},
	{id:"m6", title:"Chicken", link:"/chicken"},
	{id:"m7", title:"Pork", link:"/pork"},
	{id:"m8", title:"Beef", link:"/beef"},
	{id:"m9", title:"Recommendations", link:"/recommendations"},
	{id:"m10", title:"Desert", link:"/desert"},
	{id:"m11", title:"Drinks", link:"/drinks"},
];

const SidebarMenu = (props) => {
	return (<aside className="absolute min-h-screen h-full z-50 transition-all
		bg-gray-200 text-gray-600 w-64 top-0 left-0 opacity-100">
		<div className='text-center cursor-pointer' >
			<Link href='/'>
				<a>
					<div className='flex items-center py-2 pr-8 bg-gray-200 justify-between' >
						<h1 className='text-2xl w-36 text-gray-600'>Menu</h1>
						<div className='bg-pink-300 text-white rounded h-6 w-6 items-center flex justify-center' onClick={props.onClose}>
							<MdChevronRight />
						</div>
					</div>
				</a>
			</Link>
		</div>
			<nav>
				<div className="flex flex-col py-4">
					{menus.map((link)=>{
						return <div className="py-2 mb-0 mt-1 hover:bg-pink-300" key={link.id}>
							<Link href={link.link}>
								<a className='flex justify-end pr-8'>{link.title} </a>
							</Link>
						</div>
					})}
				</div>

			</nav>
		</aside>);
};

export default SidebarMenu;
