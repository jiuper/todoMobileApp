import { createSlice } from "@reduxjs/toolkit";

interface IGeneralReducer {
    isOpenModal: boolean;
}
const initialState: IGeneralReducer = {
    isOpenModal: false,
};
const generalReducerSlice = createSlice({
    name: "generalReducer",
    initialState,
    reducers: {
        isOpen(state) {
            state.isOpenModal = !state.isOpenModal;
        },
    },
});

export const { isOpen } = generalReducerSlice.actions;
export const generalReducer = generalReducerSlice.reducer;
