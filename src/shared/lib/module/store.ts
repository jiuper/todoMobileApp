import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

const rootReducer = combineReducers({});

export type RootReducer = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
