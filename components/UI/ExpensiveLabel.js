import React from 'react';

const ExpensiveLabel = ({children}) => {
	return (
		<div>
			<p className={`my-2  px-4 py-2 rounded bg-red-500 text-white`}>
				{children}
			</p>
		</div>
	);
};

export default ExpensiveLabel;
