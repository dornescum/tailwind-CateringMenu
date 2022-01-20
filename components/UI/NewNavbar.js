import React, {useState} from 'react';
import SidebarMenu from "./SidebarMenu";
import { MdFormatAlignRight } from "react-icons/md";
import Logo from '../../public/assets/svg/food-donation-svgrepo-com.svg';
import Image from "next/image";
import Link from "next/link";



const NewNavbar = () => {
	const [showSidebar, setShowSidebar]=useState(false);

	return (
		<div className='relative'>
			<div className='flex justify-between py-2'>
				<Link href='/'>
					<a>
						<Image src={Logo} alt="logo" className='bg-gray-100' width='60' height='20'/>
					</a>
				</Link>
				{/*<Image src={Logo} alt="logo" className='bg-gray-100' width='60' height='20'/>*/}
				<button onClick={()=>setShowSidebar(!showSidebar)} className='p-2 bg-slate-100 rounded-md'>
					<MdFormatAlignRight />
				</button>
			</div>

			{showSidebar && <SidebarMenu onClose={()=>setShowSidebar(!showSidebar)}/>}
		</div>
	);
};

export default NewNavbar;
