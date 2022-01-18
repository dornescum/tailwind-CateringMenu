import React from 'react';
import ChevronRight from "../../assets/icons/ChevronRight";
import { MdSearch, MdOutlineKeyboardArrowDown } from "react-icons/md";


const SearchBox = () => {
	return (
		<div className='px-4'>
			<div className='flex items-center w-full'>
				<ChevronRight />
				<h1 className='text-2xl w-36'>Popular Menu</h1>
			</div>
			<div className='pt-8'>
				<div className='bg-slate-50 flex py-4 rounded-md px-4 md:items-center  md:w-96 md:mx-auto'>
					<input type="text" placeholder='Search' className='bg-slate-50 w-64 md:w-full'/>
					<button className='md:pr-4'>
						<MdSearch />
					</button>
					<div className='flex flex-1 items-center justify-end'>
						<div className='bg-pink-300 text-white p-2 rounded-md'>
							<MdOutlineKeyboardArrowDown />
						</div>

					</div>
				</div>

			</div>
		</div>
	);
};

export default SearchBox;
