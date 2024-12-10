/**
 * Header
 * 2023-2024
 * v 0.0.2
 */

// REACT
import React, { FC, useState, useEffect } from "react";
// APP
import { MenuHeaderBig } from "../menu/menu__header_big";
import { MenuHeaderSmall } from "../menu/menu__header_small";
import { HeaderContextProvider } from "../../context";
import { get_css_value, width_higher_than}  from "../../utils/hu";

interface PropsHeader { }



const style_small_menu = {
	width: get_css_value("--height_home_cell"),
	height: get_css_value("--height_header_cell"),
	fontFamily: get_css_value("--font_title"),
  fontWeight: 700,
  fontSize: 20,
	cursor: "pointer",
}

export const Header: FC<PropsHeader> = () => {
  const [size, set_size] = useState(1);
	// need useEffect to avoid too much re-rendering
	let buf =  get_css_value("--screen_min");
	let value_is = false;
	if(buf !== undefined) {
		let min = Number(buf.slice(0,-2));
		value_is = width_higher_than(min);
	}
	
	useEffect(() => {
		if(value_is) {
			set_size(1);
		} else {
			set_size(0);
		}
	})

  return (<HeaderContextProvider>
    <div className="header">
				{size > 0 ? <MenuHeaderBig/> : <MenuHeaderSmall style_box={style_small_menu}/>}
			</div>
  </HeaderContextProvider>)
} 

