import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderId: "",
    customerName: "",
    tableNo: "",
    guests: 0
}

const customerSlice = createSlice({
    name : "customer",
    initialState,
    reducers : {
        setCustomer: (state, action) => {
            const { name, guests } = action.payload;
            state.orderId = `${Date.now()}`
            state.customerName = name;
            state.guests = guests;
        },

        removeCustomer: (state) =>{
            state.customerName = "";
            state.guests = 0;
            state.tableNo = ""
        },

        updateTable: (state, action) => {
            state.tableNo = action.payload.tableNo;
        }
    }
})

export const { setCustomer, removeCustomer, updateTable } = customerSlice.actions;
export default customerSlice.reducer;