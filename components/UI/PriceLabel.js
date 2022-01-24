import React from 'react';

const PriceLabel = ({children}) => {
	return (
		<div>
			<p className={`my-2  px-4 py-2 rounded bg-gray-200`}>
				{children}
			</p>
		</div>
	);
};

export default PriceLabel;
