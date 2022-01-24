import React from 'react';

const Button = (props) => {
	return (
		<div>
			<button   className={`rounded bg-gray-300 text-white text-md 
			 p-${props.padding ? props.padding : 2 }
			 m-${props.padding ? props.padding : 1 }
			 `}
					  onClick={props.onClick}>
				{props.children}
			</button>
		</div>
	);
};

export default Button;
