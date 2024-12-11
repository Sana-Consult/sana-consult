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

const style_header = {
  background : get_css_value("--layout_bg"),
  boxShadow : "0 -15em 1em 15em " +get_css_value("--color_shadow"),
}

const style_body = {
  background : get_css_value("--layout_bg"),

}
const style_content_cell = {
  color: get_css_value("--color_text"),
  margin: "0 auto",
  paddingBottom: 24,
  paddingLeft: 42,
  paddingRight: 42,
  
  maxWidth: get_css_value("--width_content_max"),
}

const headingStyles = {
  marginBottom: "1em",
  // maxWidth: 600,
}

export const Layout: FC<Props> = ({children}) => {
  return (<>
    <div style={style_header}>
      <Header/>
    </div>
    <div style={headingStyles}></div >
    <div style={style_body}>
      <div style={style_content_cell}>
        {children}
      </div>
    </div>
    <Footer/>  
  </>
  );
};

