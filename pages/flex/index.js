import React from 'react';

const Flex = () => {
	return (
		<div>
			<h1>flex</h1>

			<div className="flex flex-row gap-2 justify-center items-center p-2">
				<div className="basis-1/3 hover:basis-1/2 bg-pink-100 rounded text-center p-2">01</div>
				<div className="basis-1/3 hover:basis-1/2 transition duration-700 bg-pink-100 rounded text-center p-2">02</div>
				<div className="basis-1/3 hover:basis-1/2 bg-pink-100 rounded text-center p-2 cursor-pointer transition duration-700">03</div>
			</div>
			<h2>break points</h2>
			<div className='flex flex-col gap-2 m-1 md:flex-row '>
				<div className='bg-blue-100 rounded text-center p-2 w-full cursor-pointer'>1</div>
				<div className='bg-blue-100 rounded text-center p-2 w-full cursor-pointer'>2</div>
				<div className='bg-blue-100 rounded text-center p-2 w-full cursor-pointer'>3</div>
			</div>
		</div>

	);
};

export default Flex;
