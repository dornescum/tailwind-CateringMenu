import React from 'react';
import Link from "next/link";

const TheNavbar = () => {
	return (
		<nav className="bg-yellow-100">
			<ul>
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


			</ul>
		</nav>
	);
};

export default TheNavbar;
