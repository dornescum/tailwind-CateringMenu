import React from 'react';

const Pre = () => {
	return (
		<div className="w-3/4 overflow-x-auto">
			{/*<div className="whitespace-nowrap ...">Hey everyone!*/}

			{/*	It's almost 2022 and we still don't know if there is aliens living among us, or do we? Maybe the person*/}
			{/*	writing this is an alien.*/}

			{/*	You will never know.*/}
			{/*</div>*/}

			{/*<div className="whitespace-pre ...">Hey everyone!*/}

			{/*	It's almost 2022 and we still don't know if there is aliens living among us, or do we? Maybe the person*/}
			{/*	writing this is an alien.*/}

			{/*	You will never know.*/}
			{/*</div>*/}
			<div className="whitespace-pre-wrap ...">Hey everyone!

				It's almost 2022 and we still don't know if there is aliens living among us, or do we? Maybe the person
				writing this is an alien.

				You will never know.
			</div>
		</div>
	);
};

export default Pre;
