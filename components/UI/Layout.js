import React from 'react';

const Layout = ({children}) => {
	return (
		<div className='p-0 md:p-1'>
			{children}
		</div>
	);
};

export default Layout;
