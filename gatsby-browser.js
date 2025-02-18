// import "./src/styles/global.css"
//REACT
import React from "react";
// import "./src/global.css";
import "./src/styles/global.css"
import { RegionContextProvider } from "./src/context";

export const wrapRootElement = ({ element }) => (
  <RegionContextProvider>{element}</RegionContextProvider>
)

