import React from 'react';
import Layout from "../../components/UI/Layout";

const AboutPage = () => {
	return (
		<Layout>
			<div className='bg-blue-100 pt-2'>
				<h1 className='text-center capitalize'>grid</h1>
			</div>
			<div className="bg-blue-100 min-h-screen flex justify-center items-center">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full p-1">
					<div className="bg-white p-3 rounded text-center md:col-span-2">1</div>
					<div className="bg-white p-3 rounded">2</div>
					<div className="bg-white p-3 rounded lg:col-span-3">3</div>
					<div className="bg-white p-3 rounded lg:col-span-3 ">4</div>
					<div className="bg-white p-3 rounded ">5</div>
					<div className="bg-white p-3 rounded ">6</div>
					<div className="bg-white p-3 rounded">7</div>
					<div className="bg-white p-3 rounded">8</div>
					<div className="bg-white p-3 rounded ">9</div>
				</div>
			</div>
		</Layout>

	);
};

export default AboutPage;
