import React, {useEffect, useState} from 'react';
import Image from "next/image";

const BurgersId = ({article}) => {
	// console.log(article);
	// const [data, setData] = useState([article]);

	return (
		<div>
			{!article && <p>no articles</p>}
			{article && <div>
				{article.title}
				<Image src={`/assets/burger.jpg`} alt={article?.title}
					   className="rounded-md w-24 h-24" width="880" height="640"/>
			</div>}

		</div>
	);
};
export async function getServerSideProps(context) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id} `);
	const article = await res.json();

	return {
		props: {
			article
		}, // will be passed to the page component as props
	}
}


export default BurgersId;
