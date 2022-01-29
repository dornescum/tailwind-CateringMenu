import React, {useState} from 'react';
import SidebarMenu from "./SidebarMenu";
import {MdClose, MdFormatAlignRight, MdChevronLeft} from "react-icons/md";



const NewNavbar = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<div className="relative">
			<div className="flex justify-between py-2 z-10">
						<div className="flex items-center pl-4 cursor-pointer" onClick={() => setShowSidebar(!showSidebar)}>
							<div className='bg-primary text-white h-8 w-8 rounded-md flex items-center justify-center'>
								<MdChevronLeft />
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
