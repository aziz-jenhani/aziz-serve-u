import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

import ItemMenuProvider from "./contexts/ItemMenuContext";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./stateglobal"
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ItemMenuProvider>
    <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    </React.StrictMode>
  </ItemMenuProvider>
);
