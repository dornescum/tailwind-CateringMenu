import React, {useState} from 'react';
import Link from "next/link";

const TheNavbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const handleClick = () => {
		setNavbarOpen(!navbarOpen);
		console.log('click');
	};
	return (
		<nav className="bg-gray-200">
			<div className='flex justify-between py-2'>
				<div className='flex pl-4 mb-0 mt-1'>
					<Link href="/">
						<a>Home </a>
					</Link>
				</div>
				<div className='hidden md:block'>
					<ul className='flex'>
						<li className='py-2 px-4'>
							<Link href="/">
								<a>Products</a>
							</Link>
						</li>
						<li className='py-2 px-4'>
							<Link href="/about">
								<a>About </a>
							</Link>
						</li>
						<li className='py-2 px-4'>
							<Link href="/users">
								<a>Users</a>
							</Link>
						</li>
						<li className='py-2 px-4'>
							<Link href="/contact">
								<a>Contact</a>
							</Link>
						</li>

					</ul>
				</div>


				<div className="sm:hidden flex pr-4 ">
					<button onClick={handleClick} className='transition hover:duration-300 hover:rotate-180 ease-in-out'>
						<svg aria-hidden="true" role="img" width="2em" height="2em"
							 preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
							<path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z" fill="currentColor"/>
						</svg>
					</button>
				</div>
			</div>

			<div className='flex flex-col mt-2 lg:hidden'>
				<ul>
					<li className={navbarOpen ? 'block py-2 px-4 italic': 'hidden'}>
						<Link href='/' >
							<a>
								Products
							</a>
						</Link>
					</li>
				<li className={navbarOpen ? 'block py-2 px-4 italic': 'hidden'}>
						<Link href='/' >
							<a>
								Products
							</a>
						</Link>
					</li>
				<li className={navbarOpen ? 'block py-2 px-4 italic': 'hidden'}>
						<Link href='/' >
							<a>
								Products
							</a>
						</Link>
					</li>
				<li className={navbarOpen ? 'block py-2 px-4 italic': 'hidden'}>
						<Link href='/' >
							<a>
								Products
							</a>
						</Link>
					</li>

				</ul>


			</div>
		</nav>
	);
};

export default TheNavbar;
