import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./slices/menuSlice";

export const store = configureStore({
	reducer: {
		menu: MenuReducer,
	},
});
