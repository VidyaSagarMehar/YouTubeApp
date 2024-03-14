import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
	name: 'chat',
	initialState: {
		messages: [],
	},
	reducers: {
		addMessage: (state, action) => {
			// it will push at the end
			// state.messages.push(action.payload);

			// it will push it at the begining
			state.messages.unshift(action.payload);
		},
	},
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
