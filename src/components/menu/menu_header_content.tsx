/**
 * MENU HEADER CONTENT
 * 2023-2024
 * V 0.1.0
 */

// REACT
import React, { FC } from "react";
import { useContext } from "react";
// APP
import { NavCellBox, Box, GoHome, DropdowRegions, Dropdown, DropdownRegionsBig } from "../hc.tsx"
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

	// Je ne trouve pas le moyen d'éviter le null et donc l'erreur avec "lang"

	// SOLUTION 1
	// let index = "0";
	// if(lang !== null) index = lang;

	// SOLUTION 2
	// if(lang === null) {
	// return <></>
	// } else 

	// SOLUTION 3
	// if (lang === null) {
	// 	lang = "fr";
	// 	(lang as unknown) as string;
	// }

	return <Dropdown 	name={tree[lang].lang[lang]}
										style_box={style_box} style_cell={style_cell} 
										offset={offset}
										is={lang_db_is} 
										set_is={set_lang_db_is}>
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

////////////////////
// MenuHeaderContent
////////////////////
export const MenuHeaderContent: FC<PropsMenu> =({className_box, style_box, style_cell, in_line}) => {
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
		zIndex: 1,
		// boxShadow : "0 -15em 1em 15em " +get_css_value("--color_shadow"),
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
	{in_line !== false ?
		<RenderMenuBig className_box={className_box} style_box={box} style_cell={cell} box={box} cell={cell} height_header={height_header}/>:
		<RenderMenuSmall className_box={className_box} style_box={box} style_cell={cell} box={box} cell={cell} height_header={height_header}/>
		}
	</Box>
}

// RENDER MENU
interface PropsMenuRender extends PropsMenu {
  box: string;
  cell: any;
	height_header: number;
}

const RenderMenuBig: FC<PropsMenuRender> =({className_box, style_box, box, cell, height_header}) => {
	let { lang } = useContext(RegionContext);

	const shadow_style = {
		boxShadow : "0 -15em 1em 15em " +get_css_value("--color_shadow"),
	}
	const shadow_dropdown_style = Object.assign({}, shadow_style, box);
	
	// Je ne trouve pas le moyen d'éviter le null et donc l'erreur avec "lang"
	// voir ligne 70
	return <>
		<div className={"flex"}>
			<GoHome style_box={box} style_cell={cell}/>
			<NavCellBox to="/about" style_box={box} style_cell={cell}>{tree[lang].about}</NavCellBox>
			<NavCellBox to="/contact" style_box={box} style_cell={cell}>{tree[lang].contact}</NavCellBox>
		</div>
		<DropdownRegionsBig/>
		{/* <DropdowRegions style_box={box} style_cell={cell} offset={(height_header) * 0.5 + "px"} 
										is={null} set_is={function (action: boolean): void {throw new Error("Function not implemented.");
		} }/> */}
		{/* <DropdowRegions style_box={box} style_cell={cell} offset={(height_header) * 0.5 + "px"} 
										is={null} set_is={function (action: boolean): void {throw new Error("Function not implemented.");
		} }/> */}
	</>
}

const RenderMenuSmall: FC<PropsMenuRender> =({className_box, style_box, box, cell, height_header}) => {
	// Je ne trouve pas le moyen d'éviter le null et donc l'erreur avec "lang"
	// voir ligne 70
	const { lang } = useContext(RegionContext);
	return <Box className={className_box} style={style_box}>
		<NavCellBox to="/about" style_box={box} style_cell={cell}>{tree[lang].about}</NavCellBox>
		<NavCellBox to="/contact" style_box={box} style_cell={cell}>{tree[lang].contact}</NavCellBox>
		<DropdowRegions style_box={box} style_cell={cell} offset={(height_header) * 0.5 + "px"} 
										is={null} set_is={function (action: boolean): void {throw new Error("Function not implemented.");
		} }/>
	</Box>
}