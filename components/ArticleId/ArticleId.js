import React, {useContext} from 'react';
import ExpensiveLabel from "../UI/ExpensiveLabel";
import PriceLabel from "../UI/PriceLabel";
import Button from "../UI/Button";
import Image from "next/image";
import {ValueContext} from "../../context/ValueContext";

const ArticleId = ({title, body, img, id}) => {
	const {handleCart} = useContext(ValueContext);

	const prices = Math.floor(Math.random() * 100);

	return (
		<div className="flex flex-col md:flex-row justify-around bg-slate-100 mx-4 justify-center items-center
		rounded-md shadow-md" data-testid={title.slice(0,2)}>
			<div className="text-justify m-4 p-2" data-testid={parseInt(id) * 1000}>
				<p className="mx-0 my-2 md:my-4 md:mx-2 font-bold text-4xl capitalize text-center">
					{title.slice(0, 10)}
				</p>
				<p className="mx-0 my-8 md:my-4 md:mx-2">
					{body}
				</p>
				<div className="flex justify-between items-center mx-4">
					{prices > 50 ? <ExpensiveLabel data-testId={title.slice(4,6)}>{prices} &euro;</ExpensiveLabel>
						: <PriceLabel data-testId={title.slice(4,6)}>{prices} &euro;</PriceLabel>}
					<Button className={'bg-green-200 text-blue-800 p-3'} onClick={handleCart} data-testId={title.slice(3,6)}>Add to
						cart</Button>
				</div>
			</div>
			<Image src={img} alt={title} className="rounded-md w-24 h-24 cursor-wait"
				   width="900"
				   height="700"/>
		</div>
	);
};

export default ArticleId;
