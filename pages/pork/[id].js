import React, {useEffect, useState} from 'react';
import ArticleId from "../../components/ArticleId/ArticleId";
import IndividualPageProduct from "../../components/IndividualPage/IndividualPage";
import Link from "next/link";


const images = [
	{
		id: 1,
		title: 'pork 1',
		link: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		id: 2,
		title: 'pork 2',
		link: 'https://images.unsplash.com/photo-1626203313658-886791f37e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
	},
	{
		id: 3,
		title: 'pork 3',
		link: 'https://images.unsplash.com/photo-1592409713878-33e2015e92b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fHBvcmslMjBzdGVha3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
	},
];

const PorkId = ({itemId}) => {
	const porkImageId = 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcmslMjBzdGVha3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60';
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
								  img={porkImageId}
			/>}
			<ul className="flex flex-col md:flex-row flex-wrap">
				{data.map((item) => {
					return <Link href={`/pork/${item.id}`} key={item.id}>
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

export default PorkId;

export async function getServerSideProps(context) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id} `);
	const itemId = await res.json();

	return {
		props: {
			itemId
		}
	};
}
