import React from 'react';
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

import Beef from '../../public/assets/beef.jpg';
import Burger from '../../public/assets/burger.jpg';
import Pasta from '../../public/assets/pastaAmatriciana.jpg';
import Pork from '../../public/assets/recommendation.jpg';
import Dessert from '../../public/assets/dessert.jpg';
import Salad from '../../public/assets/salata.jpg';

const SliderComponent = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: "linear"
	};
	return (
		<div className="mt-2 mb-8 mx-4 w-full ">
			<h2 className="my-2 font-bold pl-2 md:pl-12">Recommendation</h2>
			<Slider {...settings}>
				<div className="p-1">
					<Link href="/beef">
						<a>
							<div className="flex items-center justify-center">
								<Image src={Beef} width="400" height="300" className="rounded-md m-1 md:m-0"/>
							</div>

						</a>
					</Link>

				</div>
				<div className="p-1">
					<Link href="/burgers">
						<a>
							<div className="flex items-center justify-center">
								<Image src={Burger} width="400" height="300" className="rounded-md"/>
							</div>
						</a>
					</Link>

				</div>
				<div className="p-1">
					<Link href="/pasta">
						<a>
							<div className="flex items-center justify-center">
								<Image src={Pasta} width="400" height="300" className="rounded-md"/>
							</div>
						</a>
					</Link>

				</div>
				<div className="p-1">
					<Link href="/pork">
						<a>
							<div className="flex items-center justify-center">
								<Image src={Pork} width="400" height="300" className="rounded-md"/>
							</div>
						</a>
					</Link>

				</div>
				<div className="p-1">
					<Link href="/salads">
						<a>
							<div className="flex items-center justify-center">
								<Image src={Salad} width="400" height="300" className="rounded-md"/>
							</div>
						</a>
					</Link>

				</div>
				<div className="p-1">
					<Link href="/desert">
						<a>
							<div className="flex items-center justify-center">
								<Image src={Dessert} width="400" height="300" className="rounded-md"/>
							</div>
						</a>
					</Link>

				</div>
			</Slider>
		</div>
	);
};

export default SliderComponent;
