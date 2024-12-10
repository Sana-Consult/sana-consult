/**
 * Layout
 * 2023-2024
 * v 0.0.3
 * 
 * */
// REACT
import React, { FC } from "react";
// APP
import { Header } from "./header";
import { Footer } from "./footer";
import { get_css_value } from "../../utils/tools";
import './layout.css';

interface Props {
  children? : React.ReactNode;
}
const style_content_box = {
  background : get_css_value("--layout_bg"),
  borderTop: "2px solid " + get_css_value("--color_line"),
}
const style_content_cell = {
  color: get_css_value("--color_text"),
  margin: "0 auto",
  paddingBottom: 24,
  paddingLeft: 42,
  paddingRight: 42,
  
  maxWidth: get_css_value("--width_content_max"),
}

export const Layout: FC<Props> = ({children}) => {
  return (<>
    <Header/>
    <div style={style_content_box}>
      <div style={style_content_cell}>
        {children}
      </div>
    </div>
    <Footer/>  
  </>
  );
};

