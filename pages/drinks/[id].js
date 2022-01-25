import React, {useEffect, useState} from 'react';
import ArticleId from "../../components/ArticleId/ArticleId";
import IndividualPageProduct from "../../components/IndividualPage/IndividualPage";
import Link from "next/link";


const images = [
	{
		id: 1,
		title: 'pasta 1',
		link: 'https://images.pexels.com/photos/1170599/pexels-photo-1170599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	},
	{
		id: 2,
		title: 'pasta 2',
		link: "https://images.pexels.com/photos/2531195/pexels-photo-2531195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
	},
	{
		id: 3,
		title: 'pasta 3',
		link: "https://images.pexels.com/photos/1189255/pexels-photo-1189255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
	},
];

const DrinksId = ({itemId}) => {
	const drinksImageId = 'https://images.pexels.com/photos/5546958/pexels-photo-5546958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
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
								  img={drinksImageId}
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

export default DrinksId;

export async function getServerSideProps(context) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id} `);
	const itemId = await res.json();
	console.log(itemId);

	return {
		props: {
			itemId
		}
	};
}
