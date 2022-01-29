import React, {useContext, useState} from 'react';
import {MdAccountCircle, MdQuickreply, MdShoppingBasket, MdHouse, MdClose} from "react-icons/md";
import Link from "next/link";
import {ValueContext} from "../../context/ValueContext";
import ProductsCart from "../ProductsCart/ProductsCart";

const TheFooter = () => {
	const {initialValue, setInitialValue} = useContext(ValueContext);
	const [showCart, setShowCart] = useState(false);
	const [showHelp, setShowHelp] = useState(false);
	const [firstResponse, setFirstResponse] = useState('');
	const [firstResponseAction, setFirstResponseAction] = useState(false);

	const handleCartInfo = () => {
		setShowCart(!showCart);
		setFirstResponse('');
	};

	const handleHelp = () => {
		setShowHelp(!showHelp);
		setTimeout(() => {
			setShowHelp(false);
			// setFirstResponse('');
		}, 10000);
	};
	const firstResponseMessage = () => {
		if (firstResponse === ' ') {
			return setFirstResponse('');
		} else {
			setFirstResponse('we are a little busy.. so if want to skip ahead there is a 10$ charge ?');
		}
		setTimeout(() => {
			setFirstResponseAction(true);
			setTimeout(() => {
				setFirstResponse('');
			}, 8000);

		}, 2000);
	};


	return (
		<div className="flex items-center sticky bottom-0 left-0 bg-slate-50 absolute z-10" data-testid="footer">
			<ul className="flex flex-1 pl-4 pb-2 relative mx-2 md:mx-48 pt-2" data-testid="footer-ul">
				<li className="basis-1/3 cursor-pointer " data-testid="f-link">
					<Link href="/">
						<a>
							<div className="flex justify-center items-center" data-testid="f-link-div">
								<button className="" data-testid="f-btn">
									<MdHouse className="h-8 w-8 text-gray-600"/>
								</button>
							</div>
						</a>
					</Link>
				</li>
				<li className="basis-1/3 cursor-pointer" data-testid="s-link">
					<div className="flex justify-center items-center relative" data-testid='s-link-div'>
						<button className="" onClick={handleHelp} data-testid="reply-btn">
							<MdQuickreply className="h-8 w-8 text-gray-600"/>
						</button>
						{showHelp &&
							<div
								className="absolute bottom-12 -right-36 md:-right-20 h-48 w-[300px] md:w-96 bg-gray-200 rounded-md">
								<button className="p-1" onClick={handleHelp} data-testid="close-card">
									<MdClose color="white"/>
								</button>
								<div className="flex  justify-start flex-col py-1 px-2" data-testid="help-reply">
									<h4 className="flex justify-end py-2 ">
										Need help?
									</h4>
									<input type="text" className="bg-gray-100 py-2
									 hover:bg-gray-100 active:bg-gray-100 focus:outline-none"
										   onClick={firstResponseMessage} data-testid="f-input"/>
									{firstResponseAction &&
										<div className="flex justify-end" data-testid='f-response'>
											<p className="py-2" data-testid=''>{firstResponse}</p>
										</div>
									}
								</div>
							</div>
						}
					</div>
				</li>
				<li className="basis-1/3 cursor-pointer" data-testid='t-link'>
					<Link href="/login">
						<a className="mx-auto" itemProp="link-login">
							<div className="flex items-center justify-center" data-testid='t-link-div'>
								<button className="" data-testid='account-btn'>
									<MdAccountCircle className="h-8 w-8 text-gray-600"/>
								</button>
							</div>
						</a>
					</Link>
				</li>
				<li className="basis-1/3 cursor-pointer" onClick={handleCartInfo} data-testid='fourth-link'>
					<div className="flex items-center justify-center" data-testid='fourth-link-div'>
						<MdShoppingBasket className="h-8 w-8 text-gray-600" data-testid='shopping-card'/>
						<span className="bg-primary text-white rounded-full absolute bottom-5
						right-4 md:right-6 lg:right-14 xl:right-36 xl:mr-2 h-6 w-6 flex justify-center items-center" data-testid='initial-value'>{initialValue}</span>
						{showCart && <ProductsCart />}
					</div>
				</li>
			</ul>
		</div>
	);
};

export default TheFooter;
