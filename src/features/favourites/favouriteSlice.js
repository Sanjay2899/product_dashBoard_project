import { createSlice } from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
  name: 'favourites',
  initialState: [],
  reducers: {
    addFavourite(state, action) {
      if (!state.find(p => p.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeFavourite(state, action) {
      return state.filter(p => p.id !== action.payload);
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;