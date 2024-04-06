import React from "react";
import { Outlet } from "react-router-dom";
import Navbarlist from "./Navbarlist";
import { Provider } from "react-redux";
import store from "../store/store";
function RootLayout() {
  return (
    <Provider store={store}>
      <div>
        <Navbarlist />
        <main>
          <Outlet />
        </main>
      </div>
    </Provider>
  );
}

export default RootLayout;
