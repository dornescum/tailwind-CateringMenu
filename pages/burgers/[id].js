import React, {useEffect, useState} from 'react';

const BurgersId = ({article}) => {
	// console.log(article);
	// const [data, setData] = useState([article]);

	return (
		<div>
			{!article && <p>no articles</p>}
			{article && <div>{article.title}</div>}

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
