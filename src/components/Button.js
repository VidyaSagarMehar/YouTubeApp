import React from 'react';

const Button = ({ name }) => {
	return (
		<div>
			<button className="m-2 bg-gray-200 px-3 py-1 rounded-lg">{name}</button>
		</div>
	);
};

export default Button;
