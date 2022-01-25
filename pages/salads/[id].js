import React, {useEffect, useState} from 'react';
import ArticleId from "../../components/ArticleId/ArticleId";
import IndividualPageProduct from "../../components/IndividualPage/IndividualPage";
import Link from "next/link";
import Image from "next/image";


const SaladId = ({itemId}) => {
	const [data, setData] = useState([]);
	console.log(data);

	useEffect(() => {
		const getData = async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=12');
			const data = await res.json();
			setData(data);
		};
		getData();
	}, []);

	const prices = Math.floor(Math.random() * 100);


	return (
		<div>
			{!itemId && <p>no items</p>}
			{itemId && <ArticleId title={itemId?.title} body={itemId?.body}
								  img="https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8NDM4MzI0MXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
			/>}
			<ul className="flex flex-col md:flex-row flex-wrap">
				{data.map((item) => {
					return <Link href={`/beef/${item.id}`} key={item.id}>
						<a className="basis-1/2 md:basis-1/3">
							<li className="p-2 m-4">
								<div className="p-1  bg-slate-100 rounded-md shadow-md">
									<IndividualPageProduct title={item?.title} body={item?.body}
														   img='https://images.unsplash.com/photo-1545216560-68430ad77342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8NDM4MzI0MXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>
								</div>
							</li>
						</a>
					</Link>;
				})}
			</ul>


		</div>
	);
};

export default SaladId;

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
