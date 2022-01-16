import React from 'react';
import ChevronRight from "../../assets/icons/ChevronRight";
import search from '../../assets/icons/search.svg'

const SearchBox = () => {
	return (
		<div className='px-4'>
			<div className='flex items-center w-full'>
				<ChevronRight />
				<h1 className='text-2xl w-36'>Popular Menu</h1>
			</div>
			<div className='pt-8'>
				<div>
					<input type="text" placeholder='Search'/>
					<button>
						<img src={search} alt="search"/>
					</button>
				</div>

			</div>
		</div>
	);
};

export default SearchBox;
