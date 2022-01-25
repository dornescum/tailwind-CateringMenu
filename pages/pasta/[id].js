import React, {useEffect, useState} from 'react';
import ArticleId from "../../components/ArticleId/ArticleId";
import IndividualPageProduct from "../../components/IndividualPage/IndividualPage";
import Link from "next/link";


const images = [
	{
		id: 1,
		title: 'pasta 1',
		link: 'https://images.unsplash.com/photo-1574969903809-3f7a1668ceb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFzdGElMjBjYXJib25hcmF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		id: 2,
		title: 'pasta 2',
		link: 'https://images.unsplash.com/photo-1574969903809-3f7a1668ceb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFzdGElMjBjYXJib25hcmF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		id: 3,
		title: 'pasta 3',
		link: 'https://images.unsplash.com/photo-1574926053821-79c5e338a933?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFzdGElMjBjYXJib25hcmF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
	},
];

const SoupId = ({itemId}) => {
	const pastaImageId = 'https://images.unsplash.com/photo-1588013273468-315fd88ea34c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGElMjBjYXJib25hcmF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
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
								  img={pastaImageId}
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

export default SoupId;

export async function getServerSideProps(context) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id} `);
	const itemId = await res.json();

	return {
		props: {
			itemId
		}
	};
}
