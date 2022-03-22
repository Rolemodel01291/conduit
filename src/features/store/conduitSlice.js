import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    transactions: [],
};

const conduitSlice = createSlice({
  name: "conduit",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
        state.transactions = [...state.transactions, action.payload];
    },
    deleteTransaction: (state, action) => {
        state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
    }
  },
  extraReducers: {
  },
});

export const { addTransaction, deleteTransaction } = conduitSlice.actions;

export default conduitSlice.reducer;
