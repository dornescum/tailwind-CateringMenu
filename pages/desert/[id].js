import React, {useEffect, useState} from 'react';
import ArticleId from "../../components/ArticleId/ArticleId";
import IndividualPageProduct from "../../components/IndividualPage/IndividualPage";
import Link from "next/link";


const images = [
	{
		id: 1,
		title: 'dessert 1',
		link: 'https://images.pexels.com/photos/3026810/pexels-photo-3026810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
	},
	{
		id: 2,
		title: 'dessert 2',
		link: 'https://images.pexels.com/photos/3026807/pexels-photo-3026807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
	},
	{
		id: 3,
		title: 'dessert 3',
		link: 'https://images.pexels.com/photos/5634003/pexels-photo-5634003.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
	},
];

const DessertId = ({itemId}) => {
	const dessertImageId = 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=12');
			const data = await res.json();
			setData(data);
		};
		getData();
	}, []);

	const randomPhoto = Math.floor(Math.random() * images.length);
	const {link} = images[randomPhoto];

	return (
		<div>
			{!itemId && <p>no items</p>}
			{itemId && <ArticleId title={itemId?.title} body={itemId?.body}
								  img={dessertImageId}
			/>}
			<ul className="flex flex-col md:flex-row flex-wrap">
				{data.map((item) => {
					return <Link href={`/pasta/${item.id}`} key={item.id}>
						<a className="basis-1/2 md:basis-1/3">
							<li className="p-2 m-4">
								<div className="p-1  bg-slate-100 rounded-md shadow-md">
									<IndividualPageProduct title={item?.title} body={item?.body}
														   img={link}/>
								</div>
							</li>
						</a>
					</Link>;
				})}
			</ul>
		</div>
	);
};

export default DessertId;

export async function getServerSideProps(context) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id} `);
	const itemId = await res.json();

	return {
		props: {
			itemId
		}
	};
}
