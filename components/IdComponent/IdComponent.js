import React, {useContext} from 'react';
import Link from "next/link";
import Image from "next/image";
import ExpensiveLabel from "../UI/ExpensiveLabel";
import PriceLabel from "../UI/PriceLabel";
import Button from "../UI/Button";
import {ValueContext} from "../../context/ValueContext";

const IdComponent = ({title, description, id, price, img, handleCart}) => {


	// const prices = Math.floor(Math.random() * 100);

	return (<div className="flex flex-col md:flex-row justify-around bg-slate-100 mx-4 justify-center items-center
		rounded-md shadow-md" data-testid={title.slice(0,2)}>
			<div className="text-justify m-4 p-2" data-testid={title.slice(2,4)}>
				<p className="mx-0 my-2 md:my-4 md:mx-2 font-bold text-4xl capitalize text-center font-donfle" data-testid={title.slice(1,7)}>
					{title.slice(0, 10)}
				</p>
				<p className="mx-0 my-8 md:my-4 md:mx-2" data-testid={description.slice(1,9)}>
					{description}
				</p>
				<div className="flex justify-between items-center mx-4" data-testid={description.slice(4,9)}>
					{price > 50 ? <ExpensiveLabel data-testId={title.slice(4,6)}>{price} &euro;</ExpensiveLabel>
						: <PriceLabel data-testId={title.slice(4,6)}>{price} &euro;</PriceLabel>}
					<Button className={'bg-green-200 text-blue-800 p-3'} onClick={handleCart} data-testId={title.slice(3,6)}>Add to
						cart</Button>
				</div>
			</div>
			<Image src={img} alt={title} className="rounded-md w-24 h-24 cursor-wait object-cover"
				   width="800"
				   height="700" data-testid={id}/>
		</div>
	);
};

export default IdComponent;