import React, {useState} from 'react';
import SidebarMenu from "./SidebarMenu";
import {MdClose, MdFormatAlignRight} from "react-icons/md";
import Logo from '../../public/assets/svg/food-donation-svgrepo-com.svg';
import Image from "next/image";
import Link from "next/link";
import ChevronRight from "../../assets-next/icons/ChevronRight";


const NewNavbar = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<div className="relative">
			<div className="flex justify-between py-2">
				<Link href="/">
					<a>
						{/*<Image src={Logo} alt="logo" className='bg-gray-100' width='60' height='20'/>*/}
						<div className="flex items-center pl-4" onClick={() => setShowSidebar(!showSidebar)}>
							<ChevronRight/>
							<h1 className="text-2xl w-36 pl-4">Menu</h1>
						</div>
					</a>
				</Link>
				{showSidebar ?
					<button onClick={() => setShowSidebar(!showSidebar)}
							className="p-2 bg-slate-100 rounded-md transition ease-out bg-pink-300 text-white">
						<MdClose/>
					</button>
					:
					<button onClick={() => setShowSidebar(!showSidebar)}
							className="p-2 bg-slate-100 rounded-md transition ease-out bg-pink-300 text-white">
						<MdFormatAlignRight/>
					</button>
				}
			</div>

			{showSidebar && <SidebarMenu onClose={() => setShowSidebar(!showSidebar)}/>}
		</div>
	);
};

export default NewNavbar;
