/**
 * Menu Small
 * this menu is a generic one 
 * for the desktop or computer
 * 2024-2024
 * v 0.0.4
 * 
 * */

// REACT
import React from "react";
import { useState, FC } from "react";
// APP
import { Box, Hamburger, GoHome } from "../hc.tsx";
import { get_css_value}  from "../../utils/hu";
import { MenuHeaderContent, Region } from "./menu_header_content";


///////////////////
// ELEM STYLE
//////////////////
const style_box_elem = {
	width: get_css_value("--width_header_cell"),
	height: get_css_value("--size_header_cell"),
	background: get_css_value("--color_header"),
	zIndex: 1,
}

const header_box_style = {
	margin: "0 auto",
	display: "flex",
	alignItems: "center",
	justifyContent : "space-between",
	height: get_css_value("--height_header"),
	width: "95%",
}

///////////////////
// MENU STYLE
//////////////////

const style_box_deploy_menu = {
	background: get_css_value("--color_menu_small"),
	width: "100%",
	height:"100vh",
	transform: "translate(50%, 0)",
}

const style_cell_deploy_menu = {
	width: "0px",
	height: get_css_value("--height_header"),
	cursor: "pointer",
}

///////////////////
// HAMBURGER STYLE
//////////////////
// https://codepen.io/designcouch/pen/ExvwPY
// https://codepen.io/kstanisz/pen/NWpeKZX
const hamburger_style_cell = {
	width: get_css_value("--size_header_cell"),
	height: get_css_value("--size_header_cell"),
	cursor: "pointer",
	transform: "translate(220%, 0)",
}

const style_go_home = {
	cursor: "pointer",
}

interface PropsHeaderSmall { 
	style_box: {};
}
export const MenuHeaderSmall: FC<PropsHeaderSmall> = (style_box) =>{
	const [is, set_is] = useState(false);
	let id_css = "hamburger";

	function mouse_click(event: any) {
		is ? set_is(false) : set_is(true);
	}

	return <>
		<Box style={header_box_style}>
			<GoHome style_cell={style_go_home}/>
			<Hamburger style_box={style_box_elem}>
				<div id="hamburger" className={is ? `open`: ``} style={hamburger_style_cell} onClick={mouse_click}>
					<span></span>
  				<span></span>
  				<span></span>
  				<span></span>
				</div>
			</Hamburger>
		</Box>
		{is ? <MenuHeaderContent style_box={style_box_deploy_menu} style_cell={style_cell_deploy_menu} in_line={false}/> : null}
	</>
}