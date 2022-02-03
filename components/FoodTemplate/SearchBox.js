import React, {useState} from 'react';
import {MdSearch,  MdClose} from "react-icons/md";
import Link from "next/link";


const SearchBox = () => {
	const routes = ['beef','burgers', 'chicken', 'desert', 'drinks', 'pasta', 'pork', 'recommendations', 'salads', 'soups'];
	const [enteredInput, setEnteredInput] = useState("");
	const [showList, setShowList] = useState(false);

	const handleList=()=>{
		setShowList(!showList)
	}
	const clearInput = () => {
		setEnteredInput('');
	};

	return (
		<div className="px-4">
			{/*todo search filter*/}
			<div className="pt-8">
				<div className="bg-slate-50 flex py-4 rounded-md px-4 md:items-center  md:w-96 md:mx-auto" onClick={handleList}>
					<input type="text" placeholder="Search for pasta or burgers .."
						   className="bg-slate-50 w-64 md:w-full mr-1 focus:outline-none"
						   data-testid="form-input"
						   minLength="3"
						   id="form"
						   value={enteredInput}
						   onChange={(e)=>{setEnteredInput(e.target.value)}}
					/>
					<div className="flex flex-1 items-center justify-end">
						{showList && <div className="bg-primary text-white p-2 rounded-md" id="close-btn" onClick={clearInput}>
							<MdClose/>
						</div>}
						{!showList && <div className="bg-primary text-white p-2 rounded-md" id="close-btn" onClick={clearInput}>
							<MdSearch/>
						</div>}
					</div>
				</div>
			</div>
			<div className={`${showList ? 'bg-slate-50':"bg-white"} relative flex py-4 rounded-md px-4 md:items-center  md:w-96 md:mx-auto`} >
				{showList &&
					<ul className='bg-slate-50 text-slate-500 absolute top-0 left-0 z-10 block w-full rounded-md pb-4'>
						{routes.filter((val)=>{
							if (enteredInput === ''){
								return val
							} else if (val.toLowerCase().includes(enteredInput.toLowerCase())){
								return val
							}
						}).map((route, index)=>{
							return <li key={index} className='bg-slate-50 capitalize py-1 pl-4'>
								<Link href={route}>
									<a>{route}</a>
								</Link>
							</li>
						})}
					</ul>
				}
			</div>

		</div>
	);
};

export default SearchBox;
