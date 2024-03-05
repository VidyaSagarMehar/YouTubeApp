import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
	name: 'search',
	initialState: {},
	reducers: {
		cacheResults: (state, action) => {
			// this will merge my payload with actions / mutate our state
			Object.assign(state, action.payload);
		},
	},
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

/**
 * Cache: taking the suggestions from the cache if it is present there so that we can optimize the API call
 * Time complexity to search in array = 0(n)
 * Time complexity to search in object/map = 0(1) -> this is is far more better than 0(n)
 */
