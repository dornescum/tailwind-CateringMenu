import React from 'react';
import {Menu, Transition} from '@headlessui/react';
import Pre from '../../components/Pre/Pre'
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

const Flex = () => {
	return (
		<div>
			<h1>flex</h1>

			<div className="flex flex-row gap-2 justify-center items-center p-2">
				<div className="basis-1/3 hover:basis-1/2 bg-pink-100 rounded text-center p-2">01</div>
				<div
					className="basis-1/3 hover:basis-1/2 transition duration-700 bg-pink-100 rounded text-center p-2">02
				</div>
				<div
					className="basis-1/3 hover:basis-1/2 bg-pink-100 rounded text-center p-2 cursor-pointer transition duration-700">03
				</div>
			</div>
			<h2>break points</h2>
			<div className="flex flex-col gap-2 m-1 md:flex-row ">
				<div className="bg-blue-100 rounded text-center p-2 w-full cursor-pointer">1</div>
				<div className="bg-blue-100 rounded text-center p-2 w-full cursor-pointer">2</div>
				<div className="bg-blue-100 rounded text-center p-2 w-full cursor-pointer">3</div>
			</div>
			<div className="bg-green-100">
				<Menu as="div" className="flex flex-col">
					<Menu.Button className="btn btn-primary">More</Menu.Button>
					<Menu.Items as="div" className="flex flex-col">
						<Menu.Item>
							{({active}) => (
								<a
									className={`${active && 'bg-blue-500'}`}
									href="/"
								>
									Home
								</a>
							)}
						</Menu.Item>
						<Menu.Item>
							{({active}) => (
								<a
									className={`${active ? 'bg-blue-500' : "bg-pink-200"}`}
									href="/users"
								>
									Documentation
								</a>
							)}
						</Menu.Item>
						<Menu.Item disabled>
							<span className="opacity-75">Invite a friend (coming soon!)</span>
						</Menu.Item>
					</Menu.Items>
				</Menu>
			</div>
			<Pre />

			<DropdownMenu />

			<div className="flex justify-center -space-x-14">
				<div className="mix-blend-multiply bg-blue-400 p-10 rounded-full">dsads</div>
				<div className="mix-blend-multiply bg-pink-400 p-10 rounded-full">dsdadasdas</div>
			</div>
		</div>

	);
};

export default Flex;
