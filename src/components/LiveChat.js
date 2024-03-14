import React, { useEffect } from 'react';
import ChatMessage from './ChatMessage';

const LiveChat = () => {
	useEffect(() => {
		const i = setInterval(() => {
			// API polling
			console.log('API polling');
		}, 2000);

		//clear interval
		return () => clearInterval(i);
	}, []);

	return (
		<div className="h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-md">
			<ChatMessage name="Vidya Sagar" message="Hello from live chat 👍" />
		</div>
	);
};

export default LiveChat;
