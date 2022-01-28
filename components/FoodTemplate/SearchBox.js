import React, {useState} from 'react';
import ChevronRight from "../../assets-next/icons/ChevronRight";
import {MdSearch, MdOutlineKeyboardArrowDown} from "react-icons/md";
import Link from "next/link";


const SearchBox = () => {
	const routes = ['beef', 'pasta'];
	const [enteredInput, setEnteredInput] = useState("");
	const [route, setRoute] = useState(routes);

	const handleFilter = (e) => {
		const enteredInput = e.target.value;
		setEnteredInput(enteredInput);
		setRoute(enteredInput)
		console.log(route);
	};
	const clearInput = () => {
		setRoute([]);
		setEnteredInput('');
	};

	return (
		<div className="px-4">
			{/*todo search filter*/}
			<div className="pt-8">
				<div className="bg-slate-50 flex py-4 rounded-md px-4 md:items-center  md:w-96 md:mx-auto">
					<input type="text" placeholder="Search for pasta or burgers .."
						   className="bg-slate-50 w-64 md:w-full"
						   data-testid="form-input"
						   value={enteredInput}
						   minLength="3"
						   id="form"/>
					<button className="pr-6 md:pr-4 text-stone-300" disabled>
						<MdSearch/>
					</button>
					<div className="flex flex-1 items-center justify-end">
						{/*{setRoute &&*/}
						{/*	<Link href={route}>*/}
						{/*		<a>*/}
									<div className="bg-primary text-white p-2 rounded-md" id="close-btn" >
										<MdOutlineKeyboardArrowDown/>
									</div>
						{/*		</a>*/}
						{/*	</Link>*/}
						{/*}*/}

					</div>
				</div>
			</div>


		</div>
	);
};

export default SearchBox;

// {id:"r1", route:'/beef'},
// {id:"r2", route:'/burgers'},
// {id:"r3", route:'/chicken'},
// {id:"r4", route:'/dessert'},
// {id:"r5", route:'/drinks'},
// {id:"r6", route:'/pasta'},
// {id:"r7", route:'/pork'},
// {id:"r8", route:'/recommendations'},
// {id:"r9", route:'/salads'},
// {id:"r10", route:'/soups'},
