import React, {useState} from 'react';
import SidebarMenu from "./SidebarMenu";
import { MdFormatAlignRight } from "react-icons/md";


const NewNavbar = () => {
	const [showSidebar, setShowSidebar]=useState(false);

	return (
		<div className='relative'>
			<div className='flex justify-between py-2'>
				Navbar
				<button onClick={()=>setShowSidebar(!showSidebar)} className='p-2 bg-slate-100 rounded-md'>
					<MdFormatAlignRight />
				</button>
			</div>

			{showSidebar && <SidebarMenu onClose={()=>setShowSidebar(!showSidebar)}/>}
		</div>
	);
};

export default NewNavbar;
