/**
 * Design
 * 2023-2024
 * v 0.0.2
 * 
 * */
// REACT
import React, { FC } from "react";
// APP
// import { get_css_value }  from "../utils/hu";




interface PropsDesign {
  children? : React.ReactNode;
  className? : string;
  style?: any;
  onClick? : React.MouseEventHandler<HTMLDivElement> | undefined
}


export const Box: FC<PropsDesign> = (props) => {
	return <div className={props.className} style={props.style} onClick={props.onClick}>{props.children}</div>
	// don't use a strict aquality with === to be sure to catch the value.
  // problem here but keep for the moment... cause this story about strick equality... I don't know why I do that in the past.
	// if(get_css_value("--box_default_design") === 1) {
	// 	const style = Object.assign({}, props.style)
	// 	style["border"] = "1px solid black";
	// 	return <div className={props.className} style={style} onClick={props.onClick}>{props.children}</div>
	// } else {
	// 	return <div className={props.className} style={props.style} onClick={props.onClick}>{props.children}</div>
	// }
}