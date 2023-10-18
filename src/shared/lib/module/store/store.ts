import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { projectReducer } from "../../../../entitys/Project/lib/module/store";
import { generalReducer } from "../reducers/generalReducer";

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

const rootReducer = combineReducers({ general: generalReducer, projects: projectReducer });

export type RootReducer = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
