import React, { useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { getRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
	// dispatching the action
	const dispatch = useDispatch();

	const ChatMessages = useSelector((store) => store.chat.messages);

	useEffect(() => {
		const interval = setInterval(() => {
			// API polling
			console.log('API polling');

			dispatch(
				addMessage({
					name: getRandomName(),
					message: makeRandomMessage(20),
				}),
			);
		}, 700);

		//clear interval
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-md overflow-y-scroll flex flex-col-reverse">
			{ChatMessages.map((c, i) => (
				<ChatMessage key={i} name={c.name} message={c.message} />
			))}
		</div>
	);
};

export default LiveChat;
