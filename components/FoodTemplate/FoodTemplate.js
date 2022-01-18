import React from 'react';
import WifiLogo from "../../assets/icons/WifiLogo";
import Signal from "../../assets/icons/Signal";
import Battery from "../../assets/icons/Battery";
import SearchBox from "./SearchBox";
import SwitchBtn from "../SwitchBtn/SwitchBtn";
import Categories from "./Categories";

const FoodTemplate = () => {
	const time = new Date();
	const hour = time.getHours();
	const minutes = time.getMinutes();

	return (
		<div className='bg-color-[#f4f4f4]'>
			{/*head*/}
			<div className='flex justify-between h-8 py-6 px-2 items-center'>
				<div>
					{hour} :<span> {minutes}</span>
				</div>
				<ul className='flex justify-around'>
				<li>
					<WifiLogo />
				</li>
				<li>
					<Signal />
				</li>
				<li>
					<Battery />
				</li>
				</ul>
			</div>
			{/*=============*/}
			<div className='flex justify-end my-4 pr-4'>
				<SwitchBtn />
			</div>
			<SearchBox />
			<Categories title='pasta' description='some pasta' />
		</div>
	);
};

export default FoodTemplate;
