import React from 'react';

const Phones = ({users}) => {
	return (
		<div>
		<h1>{users}</h1>
		</div>
	);
};

export default Phones;
export async function getServerSideProps(context){
	// console.log(context);
	const {params, req, res}= context;
	// console.log( params, req, res);
	return {
		props: {
			users: 'Alcatel'
		}
	}
}
