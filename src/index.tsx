import React from "react";
import "index.scss";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "app/App";
import { Provider } from "react-redux";
import { store } from "app/store";

createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter basename={"friday-project"}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);