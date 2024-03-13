import React from 'react';

const ChatMessage = ({ name, message }) => {
	return (
		<div className="flex items-center shadow py-2">
			<img
				className="rounded-full"
				src="https://yt4.ggpht.com/F9rthjl5HEipLUE0hCLpRzS-5y51TGR-boXx5fk59yX9QyRh8vF95slxTvx1-z3KvcgBmMtp=s32-c-k-c0x00ffffff-no-rj"
				alt=""
			/>
			<span className="font-bold px-2">{name}</span>
			<span>{message}</span>
		</div>
	);
};

export default ChatMessage;
