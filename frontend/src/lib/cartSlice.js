import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem(state, {payload}) {
            const existingItem = state.items.find(item => item.plant._id == payload._id);

            if(existingItem) {
                existingItem.quantity ++;
            }
            else {
                state.items.push({
                    plant: payload,
                    quantity: 1
                });
            }
        }
    }
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;