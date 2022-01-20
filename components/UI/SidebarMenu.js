import React from 'react';
import Link from "next/link";
import { MdClose } from "react-icons/md";


const menus =[
	{id:"m1", title:"Home", link:"/"},
	{id:"m2", title:"Salads", link:"/salads"},
	{id:"m3", title:"Soups", link:"/"},
	{id:"m4", title:"Pasta", link:"/"},
	{id:"m5", title:"Burgers", link:"/"},
	{id:"m6", title:"Chicken", link:"/"},
	{id:"m7", title:"Pork", link:"/"},
	{id:"m8", title:"Beef", link:"/"},
	{id:"m9", title:"Recomandations", link:"/"},
	{id:"m10", title:"Desert", link:"/"},
	{id:"m11", title:"Drinks", link:"/"},
];

const SidebarMenu = (props) => {
	return (<aside className="absolute min-h-screen h-full z-10 transition-all
		bg-pink-800 text-pink-100 w-64 top-0 left-0">
		<div className='bg-blue-300 text-white text-center cursor-pointer' >
			<ul className='flex justify-between'>
				<li className='flex pl-2 items-center'>LOGO</li>
				<li onClick={props.onClose} className='p-2 bg-green-700 text-white'>
					<MdClose />
				</li>
			</ul>
		</div>
			<nav>
				<div className="flex flex-col py-4 px-4">
					{menus.map((link)=>{
						return <div className="pl-4 py-2 mb-0 mt-1 hover:bg-red-900 text-center" key={link.id}>
							<Link href={link.link}>
								<a>{link.title} </a>
							</Link>
						</div>
					})}
				</div>

			</nav>
		</aside>);
};

export default SidebarMenu;
