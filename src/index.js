import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./App";
import "./styles/tailwind.css";

import { Provider } from "react-redux";
import { store } from "./store";

const root = createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<Home />
	</Provider>
);
