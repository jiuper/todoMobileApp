import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { IProjectItem } from "../../type/index.type";

interface IProjectReducer {
    projects: IProjectItem[];
}
const initialState: IProjectReducer = {
    projects: [],
};
export const projectReducerSlice = createSlice({
    name: "projectReducer",
    initialState,
    reducers: {
        ADD_PROJECT(state, action: PayloadAction<IProjectItem>) {
            state.projects = [...state.projects, action.payload];
        },
    },
});

export const { ADD_PROJECT } = projectReducerSlice.actions;
export const projectReducer = projectReducerSlice.reducer;
