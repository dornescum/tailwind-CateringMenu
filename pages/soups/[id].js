import React, {useEffect, useState} from 'react';
import ArticleId from "../../components/ArticleId/ArticleId";
import IndividualPageProduct from "../../components/IndividualPage/IndividualPage";
import Link from "next/link";
import Image from "next/image";

const images = [
	{
		id: 1,
		title: 'soup 1',
		link: 'https://images.unsplash.com/photo-1544681280-d25a782adc9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c291cHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		id: 2,
		title: 'soup 1',
		link: 'https://images.unsplash.com/photo-1574653853117-0274131c2175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c291cHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		id: 3,
		title: 'soup 1',
		link: 'https://images.unsplash.com/photo-1616501268826-ee9731c915d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c291cHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		id: 4,
		title: 'soup 1',
		link: 'https://images.unsplash.com/photo-1612108438004-257c47560118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c291cHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		id: 5,
		title: 'soup 1',
		link: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNvdXBzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		id: 6,
		title: 'soup 1',
		link: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c291cHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		id: 7,
		title: 'soup 1',
		link: 'https://images.unsplash.com/photo-1613478881379-175a54184a27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNvdXBzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		id: 8,
		title: 'soup 1',
		link: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHNvdXBzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		id: 9,
		title: 'soup 1',
		link: 'https://images.unsplash.com/photo-1603208614668-b35c95647eaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8V3Npc0sxOXJOcnN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
	},

];

const SoupId = ({itemId}) => {
	const soupImageId = 'https://images.unsplash.com/photo-1530734575165-ce39d996fbaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHNvdXBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
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
								  img={soupImageId}
			/>}
			<ul className="flex flex-col md:flex-row flex-wrap">
				{data.map((item) => {
					return <Link href={`/beef/${item.id}`} key={item.id}>
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
