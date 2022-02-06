import React, {useContext} from 'react';
import Link from "next/link";
import Image from "next/image";
import ExpensiveLabel from "../UI/ExpensiveLabel";
import PriceLabel from "../UI/PriceLabel";
import Button from "../UI/Button";
import {ValueContext} from "../../context/ValueContext";

const IdComponent = ({title, description, id, price, img, handleCart, subtitle, ingredients, img_owner}) => {


	return (<div className="flex flex-col lg:flex-row justify-around bg-slate-100 mx-4 justify-center items-center
		rounded-md shadow-md font-dosis" data-testid={title.slice(0, 2)}>
			<div className="text-justify m-2 p-1 " data-testid={title.slice(2, 4)}>
				<p className="mx-0 my-2 md:my-4 md:mx-2 font-bold text-4xl capitalize text-center"
				   data-testid={title.slice(1, 7)}>
					{title}
				</p>
				<p className="mx-0 my-8 md:my-4 md:mx-2 first-letter:text-2xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-1" data-testid={description.slice(1, 9)}>
					{description}
				</p>
				<div className="py-4 mx-0 md:mx-2">
					<Link href={`/${subtitle.toLowerCase()}`}>
						<a># {subtitle}</a>
					</Link>
					{/*<p className='py-1'> # {subtitle}</p>*/}
					<p className="py-1"><span className="font-medium">Ingredients</span> : {ingredients}.</p>
				</div>
				<div className="flex justify-between items-center mx-0 md:mx-4" data-testid={description.slice(4, 9)}>
					{price > 50 ? <ExpensiveLabel data-testId={title.slice(4, 6)}>{price} &euro;</ExpensiveLabel>
						: <PriceLabel data-testId={title.slice(4, 6)}>{price} &euro;</PriceLabel>}
					<Button className={'bg-green-200 text-blue-800 p-3'} onClick={handleCart}
							data-testId={title.slice(3, 6)}>Add to
						cart</Button>
				</div>
			</div>
			<div className="p-1 m-2 relative" data-testid={img_owner}>
				<p className="test-sm absolute bottom-10 left-5 text-white z-10">Image by : <span
					className="font-fold italic">	&copy; {img_owner}</span></p>
				<Image src={img} alt={title} className="rounded-md w-24 h-24 cursor-wait object-cover"
					   width="800"
					   height="700" data-testid={id}/>
			</div>

		</div>
	);
};

export default IdComponent;
