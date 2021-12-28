import React, {useState} from 'react';

const Second = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const handleClick = () => {
		setNavbarOpen(!navbarOpen);
		console.log('click');
	};
	return (
		<div className="bg-gray-200">
			<div className='flex justify-between py-2'>
				<div className='flex pl-4 mb-0 mt-1'>
					<a href='/'>Logo</a>
				</div>
				<div className='hidden md:block'>
					<div className='flex'>
						<p className='py-1 px-4'>Products</p>
						<p className='py-1 px-4'>Contact</p>
						<p className='py-1 px-4'>Users</p>
						<p className='py-1 px-4'>About</p>
					</div>
				</div>


				<div className="sm:hidden flex pr-4  ">
					<button onClick={handleClick} className='transition hover:duration-300 hover:rotate-180 ease-in-out'>
						<svg aria-hidden="true" role="img" width="2em" height="2em"
							 preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
							<path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z" fill="currentColor"/>
						</svg>
					</button>
				</div>
			</div>
			<div className='flex-col mt-2 lg:hidden'>
				<p className={navbarOpen ? 'block py-2 px-4 italic': 'hidden'}>Products</p>
				<p className={navbarOpen ? 'block py-2 px-4 italic': 'hidden'}>Users</p>
				<p className={navbarOpen ? 'block py-2 px-4 italic': 'hidden'}>Contact</p>
				<p className={navbarOpen ? 'block py-2 px-4 italic': 'hidden'}>About</p>
			</div>
		</div>
	);
};

export default Second;
