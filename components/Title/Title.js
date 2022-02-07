import React from 'react';

const Title = ({children}) => {
	return (
		<div className='mt-16 md:mt-20'>
			<h1 className='text-center m-2 p-1 text-4xl animate-bounce capitalize'>{children}</h1>
		</div>
	);
};

export default Title;
