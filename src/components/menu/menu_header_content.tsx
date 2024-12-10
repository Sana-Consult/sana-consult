/**
 * MENU HEADER CONTENT
 * 2023-2024
 * V 0.0.4
 */

// REACT
import React, { FC } from "react";
import { useContext } from "react";
// APP
import { NavCellBox, Box, GoHome, DropdowRegions, Dropdown } from "../hc.tsx"
import { get_css_value } from "../../utils/hu.tsx";
import tree from "./../../../medias/tree.json";
import { RegionContext, HeaderContext } from "../../context.tsx";


//////////////////////////
// MENU REGION
////////////////////////////////

interface PropsCell {
  className_box?: string;
  style_box?: any;
  className_cell?: string;
  style_cell?: any;
	in_line ?: boolean;
	keys:[];
	index: number;
	children: any;
}

const Cell: FC<PropsCell> =({className_box, style_box, className_cell, style_cell, keys, index, children}) => {
	const { set_lang } = useContext(RegionContext);
	function mouse_click(event: any) {
		event.preventDefault();
		set_lang(keys[index]);
	}

	return <Box className={className_box} style={style_box}>
		<div className={className_cell} style={style_cell} onClick={mouse_click}>
			{children}
		</div>
	</Box>
}

interface PropsRegion extends PropsCell  {
	values?: any;
	offset? : string;
}

const MenuRegion: FC<PropsRegion> = ({className_box, style_box, className_cell, style_cell, values, keys}) =>{
	// we cannot use key for the props because it's react reserved word
	return <>
		{values.map((elem : any, key : any) => {
			return <Cell className_box={className_box} style_box={style_box} 
										className_cell={className_cell} style_cell={style_cell}
										keys={keys} index={key}>
					{elem}
				</Cell>
		})}
	</>	
}



export const Region: FC<PropsRegion> =({style_box, style_cell, offset}) =>{
	const { lang_db_is, set_lang_db_is } = useContext(HeaderContext);
	const { lang } = useContext(RegionContext);

	return <Dropdown 	name={tree[lang].lang[lang]}
										style_box={style_box} style_cell={style_cell} 
										offset={offset}
										is={lang_db_is} set_is={set_lang_db_is}>
		<MenuRegion style_box={style_box} style_cell={style_cell} 
								values={Object.values(tree[lang].lang)} keys={Object.keys(tree[lang].lang)} />
	</Dropdown>
}

// need to define properly the any... it's very too much and very lazy !
interface PropsMenu {
  className_box?: string;
  style_box?: any;
  className_cell?: string;
  style_cell?: any;
	in_line ?: boolean
}


export const MenuHeaderContent: FC<PropsMenu> =({className_box, style_box, style_cell, in_line}) => {
  const { lang } = useContext(RegionContext);
  let hh = get_css_value("--height_header");
	let hhc = get_css_value("--height_header_cell");
	let height_header = 0;
	let height_header_cell = 0;
	if(hh !== undefined && hhc !== undefined) {
		height_header = +hh.slice(0,-2);
		height_header_cell = +hhc.slice(0,-2);
	}

  const temp_box = {
		position: "relative",
		top: (height_header - height_header_cell) * 0.5+"px",
		background: get_css_value("--color_menu_big"),
	};

  const temp_cell = {
		whiteSpace: "nowrap",
		position: "absolute",
		top: "50%",
		left: "50%",
		webkitTransform: "translate(-50%, -50%)",
		transform: "translate(-50%, -50%)",
	};

  const box = Object.assign({}, style_cell, temp_box);
	const cell = Object.assign({}, temp_cell);

	// may be this elements can be passed like a children ????
  return <Box className={className_box} style={style_box}>
		{in_line !== false ? <GoHome style_box={box} style_cell={cell}/> : <></>}
    <NavCellBox to="/about" style_box={box} style_cell={cell}>{tree[lang].about}</NavCellBox>
		<NavCellBox to="/contact" style_box={box} style_cell={cell}>{tree[lang].contact}</NavCellBox>
		<DropdowRegions style_box={box} style_cell={cell} offset={(height_header) * 0.5 + "px"} 
										is={null} set_is={function (action: boolean): void {throw new Error("Function not implemented.");
		} }/>

		{/* {in_line === true ? 
			<DropdownRadioGroup style_box={box} style_cell={cell} offset={(height_header - height_header_cell) * 0.5+"px"} in_line={in_line} /> : 
			<DropdownClassic style_box={box} style_cell={cell} offset={offset_dropdown} in_line={in_line} />
		} */}
  </Box>
}