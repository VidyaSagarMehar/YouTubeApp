import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { getRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
	const [liveMessage, setLiveMessage] = useState('');

	// dispatching the action
	const dispatch = useDispatch();

	const ChatMessages = useSelector((store) => store.chat.messages);

	useEffect(() => {
		const interval = setInterval(() => {
			// API polling
			// console.log('API polling');

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
		<>
			<div className="h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-md overflow-y-scroll flex flex-col-reverse">
				{ChatMessages.map((c, i) => (
					<ChatMessage key={i} name={c.name} message={c.message} />
				))}
			</div>
			<form
				className="w-full flex justify-around border border-black p-2 "
				onSubmit={(e) => {
					e.preventDefault();
					console.log('submit');
					dispatch(
						addMessage({
							name: 'Vidya Sagar',
							message: liveMessage,
						}),
					);
				}}
			>
				<input
					className="border border-black rounded w-96 px-1"
					type="text"
					value={liveMessage}
					onChange={(e) => {
						setLiveMessage(e.target.value);
					}}
				/>
				<button
					className="border border-black rounded px-3 bg-green-100"
					type="submit"
				>
					Submit
				</button>
			</form>
		</>
	);
};

export default LiveChat;
