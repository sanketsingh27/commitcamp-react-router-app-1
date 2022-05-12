import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div id="layout">
      <div id="navigation">
        <Navigation />
      </div>
      <div id="components">
        <Outlet />
      </div>
    </div>
  );
}
