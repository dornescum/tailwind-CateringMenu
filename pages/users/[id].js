import React from 'react';
import {useRouter} from "next/router";

const PhonesId = ({users}) => {
	console.log(users);
	// const router =useRouter();
	// console.log(router);

	return (
		<div>
				<h1>{users.user.id}</h1>
			<p>{users.user.name}</p>
			<p>{users.user.username}</p>
			<p>{users.user.email}</p>
		</div>
	);
};

export default PhonesId;

export async function getServerSideProps(context) {
	const {params}= context;
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
	const data = await res.json();
	// console.log(data);
	if (!data) {
		return {
			notFound: true,
			// redirect:{
			// 	destination:'/',
			// 	permanent: true
			// }
		};
	}

	return {
		props: {
			users: {user : data}
		}, // will be passed to the page component as props
	};
}
