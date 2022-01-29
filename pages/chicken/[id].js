import React, {useEffect, useState} from 'react';
import ArticleId from "../../components/ArticleId/ArticleId";
import IndividualPageProduct from "../../components/IndividualPage/IndividualPage";
import Link from "next/link";


const images = [
	{
		id: 1,
		title: 'chicken 1',
		link: 'https://images.unsplash.com/photo-1597652096872-658bf24731ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JpbGxlZCUyMGNoaWNrZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		id: 2,
		title: 'chicken 2',
		link: 'https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZyaWVkJTIwY2hpY2tlbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
	},
	{
		id: 3,
		title: 'chicken 3',
		link: 'https://images.unsplash.com/photo-1594266063697-304befca9629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMHN0ZWFrfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
	},
];

const ChickenId = ({itemId}) => {
	const chickenImageId = 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMGNoaWNrZW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
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
								  img={chickenImageId}
			/>}
			<ul className="flex flex-col md:flex-row flex-wrap">
				{data.map((item) => {
					return <Link href={`/chicken/${item.id}`} key={item.id}>
						<a className="basis-1/2 md:basis-1/3">
							<li className="p-2 m-4">
								<div className="p-1  bg-slate-100 rounded-md shadow-md">
									<IndividualPageProduct title={item?.title} body={item?.body}
														   img={link} id={item?.id}/>
								</div>
							</li>
						</a>
					</Link>;
				})}
			</ul>
		</div>
	);
};

export default ChickenId;

export async function getServerSideProps(context) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id} `);
	const itemId = await res.json();

	return {
		props: {
			itemId
		}
	};
}
