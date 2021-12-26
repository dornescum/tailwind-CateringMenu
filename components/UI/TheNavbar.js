import React, {useState} from 'react';
import Link from "next/link";

const TheNavbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-200 mb-3">
			<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
				{/*=============*/}
				<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
					<Link href='/'>
						<a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black">
							Justa test
						</a>

					</Link>

					<button onClick={() => setNavbarOpen(!navbarOpen)}>
						<div className='mr-4 lg:hidden' >
							<svg aria-hidden="true" role="img" width="2em" height="2em"
								 preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
								<path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z" fill="currentColor"/>
							</svg>
						</div>
					</button>
				</div>
				<div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger"/>
				{/*=============*/}
				<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
					<li>
						<Link href={`/`}>
							<a className="link"> Home</a>
						</Link>
					</li>
					<li>
						<Link href={`/about`}>
							<a className="link"> About</a>
						</Link>
					</li>

					<li>
						<Link href={`/contact`}>
							<a className="link"> contact</a>
						</Link>
					</li>
					<li>
						<Link href={`/users`}>
							<a className="link"> Users</a>
						</Link>
					</li>


				</ul>
			</div>

		</nav>
	);
};

export default TheNavbar;
