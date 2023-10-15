import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { generalReducer } from "../reducers/generalReducer";

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

const rootReducer = combineReducers({ general: generalReducer });

export type RootReducer = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
