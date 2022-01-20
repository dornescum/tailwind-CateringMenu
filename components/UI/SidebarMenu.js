import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import Logo from '../../public/assets/svg/food-donation-svgrepo-com.svg';




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
	return (<aside className="absolute min-h-screen h-full z-10 transition-all
		bg-pink-800 text-pink-100 w-64 top-0 left-0">
		<div className='bg-blue-300 text-white text-center cursor-pointer' >
			<ul className='flex justify-between'>
				<li className='flex pl-2 items-center'>
					<Link href='/'>
						<a>
							<Image src={Logo} alt="logo" className='bg-gray-100' width='60' height='20'/>
						</a>
					</Link>

				</li>
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
