import React, {useEffect, useState} from 'react';
import ArticleId from "../../components/ArticleId/ArticleId";
import IndividualPageProduct from "../../components/IndividualPage/IndividualPage";
import Link from "next/link";


const images = [
	{
		id: 1,
		title: 'burger 1',
		link: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
	},
	{
		id: 2,
		title: 'burger 2',
		link: 'https://images.unsplash.com/photo-1549611016-3a70d82b5040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2Vyc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60'
	},
	{
		id: 3,
		title: 'burger 3',
		link: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
	},
];

const SoupId = ({itemId}) => {
	const burgerImageId = 'https://images.unsplash.com/photo-1522244451342-a41bf8a13d73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGJ1cmdlcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
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
								  img={burgerImageId}
			/>}
			<ul className="flex flex-col md:flex-row flex-wrap">
				{data.map((item) => {
					return <Link href={`/burgers/${item.id}`} key={item.id}>
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

export default SoupId;

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
