import React, {useState} from 'react';

const Test = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const handleClick = () => {
		setNavbarOpen(!navbarOpen);
		console.log('click');
	};
	return (
		<div className=" p-10 m-0 flex justify-between">
			<button className="btn btn-primary transition lg:hidden md:text-gray-800">buton 1</button>
			<button className="btn btn-secondary transition-colors hover:text-gray-400 hover:drop-shadow-xl">buton 2
			</button>


		</div>
	);
};

export default Test;
