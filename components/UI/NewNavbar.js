import React, {useState} from 'react';
import SidebarMenu from "./SidebarMenu";
import {MdClose, MdFormatAlignRight, MdChevronLeft, MdChevronRight} from "react-icons/md";



const NewNavbar = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<div className="relative">
			<div className="flex justify-between z-10 py-2 fixed w-full top-0 bg-stone-50">
						<div className="flex items-center pl-4 cursor-pointer" onClick={() => setShowSidebar(!showSidebar)}>
							<div className='bg-primary text-white h-8 w-8 rounded-md flex items-center justify-center'>
								{showSidebar ? <MdChevronRight /> : <MdChevronLeft />}
								{/*<MdChevronLeft />*/}
							</div>
							<h1 className="text-2xl w-36 pl-4">Menu</h1>
						</div>
				{showSidebar ?
					<button onClick={() => setShowSidebar(!showSidebar)}
							className="p-2 bg-slate-100 rounded-md transition ease-out bg-primary text-white mr-4 md:mr-8">
						<MdClose/>
					</button>
					:
					<button onClick={() => setShowSidebar(!showSidebar)}
							className="p-2 bg-slate-100 rounded-md transition ease-out bg-primary text-white mr-4 md:mr-8">
						<MdFormatAlignRight/>
					</button>
				}
			</div>
			{showSidebar && <SidebarMenu onClose={() => setShowSidebar(!showSidebar)}/>}
		</div>
	);
};

export default NewNavbar;
