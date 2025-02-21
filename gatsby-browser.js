//REACT
import React from "react";
import "./src/styles/global.css"
import { RegionContextProvider } from "./src/context";

export const wrapRootElement = ({ element }) => (
  <RegionContextProvider>{element}</RegionContextProvider>
)

