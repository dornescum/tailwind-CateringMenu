import React, {useState} from 'react';

const Test = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const handleClick=()=>{
		setNavbarOpen(!navbarOpen)
		console.log('click');
	}
	return (
		<div className="bg-gray-400 p-2 m-0 flex justify-between">
			<h2 className="py-2 m-1">Shop</h2>

			<div className="sm:hidden flex pr-4">
				<button onClick={handleClick}>
					<svg aria-hidden="true" role="img" width="2em" height="2em"
						 preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
						<path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z" fill="currentColor"/>
					</svg>
				</button>
			</div>

			{/*flex flex-col md:flex-row*/}
			<div className='flex '>
				<div className='hidden md:block'>
					<div className='flex'>
						<p className='p-1'>Products</p>
						<p className='p-1'>Contact</p>
						<p className='p-1'>Users</p>
						<p className='p-1'>About</p>
					</div>
				</div>

				<div className='flex-col mt-12 lg:hidden'>
					<p className={navbarOpen ? 'block': 'hidden'}>Lorem ipsum dolor sit amet 1.</p>
					<p className={navbarOpen ? 'block': 'hidden'}>Lorem ipsum dolor sit amet 2.</p>
					<p className={navbarOpen ? 'block': 'hidden'}>Lorem ipsum dolor sit amet 3.</p>
					<p className={navbarOpen ? 'block': 'hidden'}>Lorem ipsum dolor sit amet 4.</p>
				</div>

			</div>

		</div>
	);
};

export default Test;
