import React from 'react';
import { Menu, Transition } from '@headlessui/react'

const DropdownMenu = () => {
	return (
		<Menu as='div' className='mt-4 ml-6'>
			{({ open }) => (
				<>
					<Menu.Button className="bg-purple-200 rounded px-2 py-4">More</Menu.Button>

					{/* Use the Transition component. */}
					<Transition
						show={open}
						enter="transition duration-100 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-75 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
					>
						{/* Mark this component as `static` */}
						<Menu.Items static>
							<Menu.Item><p className="bg-pink-200 text-white rounded px-2 py-4">test</p></Menu.Item>
							<Menu.Item><p className="bg-pink-200 text-white rounded px-2 py-4">test</p></Menu.Item>
							<Menu.Item><p className="bg-pink-200 text-white rounded px-2 py-4">test</p></Menu.Item>
							<Menu.Item><p className="bg-pink-200 text-white rounded px-2 py-4">test</p></Menu.Item>
							{/* ... */}
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	);
};

export default DropdownMenu;
