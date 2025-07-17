import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    categories: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.categories = [...new Set(action.payload.map(p => p.category))];
        state.status = 'succeeded';
      });
  },
});

export default productSlice.reducer;