/**
 * GUI
 * 2023-2024
 * v 0.0.4
 * 
 * */
// REACT
import React, { FC, ReactNode, useState } from "react";
import { useContext } from "react";
// GATSBY
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
// APP
import tree from "./../../medias/tree.json";
import { Box } from "./hc.tsx";
import { get_css_value } from "../utils/hu.tsx";
import { RegionContext, HeaderContext } from "./../context.tsx";
// TAILWIND
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

interface DesignProps {
  className_box?: string;
  style_box?: any;
  className_cell?: string;
  style_cell?: any;
}



///////////////////
// HAMBURGER
///////////////////
export function Hamburger(props: any) {
	return <Box className={props.className_box} style={props.style_box}>
		{props.children}
	</Box>
}


///////////////////
// BUTTON
///////////////////
interface ButtonProps {
  style: {};
  what: string;
  to: string;
}

//////////////////////////
// NAVIGATION
////////////////////////


// ButtonCodeNav
////////////////
// in progress
///////////////
export const ButtonCodeNav : FC<ButtonProps> = ({style, what, to}) => {
  const [is, set_is] = useState(false);
  const toggle_button = () => {
    if (is) {
      set_is(false);
    } else {
      set_is(true);
    }
  }

  return (
    <NavCell to={to}>
        <code onClick={() => toggle_button()} style={style}>{what}</code>
    </NavCell>
  )
}



/////////////
// NAVIGATION
/////////////
interface NavProps extends DesignProps {
  children ?: any;
  to: string;
  className?: string;
  style?: any;
}

// NavCell
//////////
export const NavCell: FC<NavProps> = ({to, className, style, children}) => {
	function mouse_click(event: { preventDefault: () => void; }) {
		event.preventDefault();
		navigate(to);
	}
	return <div className={className} style={style} onClick={mouse_click}>{children}</div>
}

// NavCellBox
//////////////
export const NavCellBox: FC<NavProps> = ({to, className_box, style_box, className_cell, style_cell, children}) =>{
	return <Box className={className_box} style={style_box}>
			<NavCell to={to} className={className_cell} style={style_cell}>{children}</NavCell>
		</Box>
}

// GO HOME
//////////////////
export const GoHome: FC<DesignProps> = ({className_box, style_box, className_cell, style_cell}) => {
  let h = get_css_value("--height_home_cell");
	let w = get_css_value("--height_home_cell");
	if(h === undefined) {
		h = "50px";
	}
  if(w === undefined) {
		w = "50px";
	}

	return (
    <NavCellBox to="/" className_box={className_box} style_box={style_box} className_cell={className_cell} style_cell={style_cell}>
        <div style={{maxWidth: w, maxHeight: h}}>
        <StaticImage 	src="./../../medias/home.png" alt="Home" 
                      placeholder="blurred" layout="constrained"
                      />
      </div>
	  </NavCellBox>
  )
}



/////////////////////////////
/////////////////////////////
// DROPDOWN
////////////////////////////
/////////////////////////////


//////////////////
// DROPDOWN SIMPLE
//////////////////

interface DropdownProps extends DesignProps {
  children ?: any;
  className?: string;
  style?: any;
  name?: string;
  is: boolean | null;
  set_is(action: boolean): void;
  offset? : string;
  value?: any;
}

export const Dropdown: FC<DropdownProps> = ({name,
                                            className_box, style_box, className_cell, style_cell, offset,
                                            is, set_is,  
                                            children}) => {
    const style_display = {
      display: "flex",
      flexDirection: "column",
      padding: offset + " 0"
    }

    function mouse_click(event: { preventDefault: () => void; }) {
      event.preventDefault();
      is ? set_is(false) : set_is(true); // context
    }

    // close the dropdown after use it
    function close(event: { preventDefault: () => void; }) {
      event.preventDefault();
      set_is(false);
    }

    return <Box className={className_box} style={style_box}>
      <div className={className_cell} style={style_cell} onClick={mouse_click}>{name}</div>
      {is ? 
      <div style={style_display} onClick={close}>
        {children}
      </div> 
      : <></>}
    </Box>
}


export const DropdowRegions: FC<DropdownProps>= ({className_box, style_box, className_cell, style_cell, offset}) => {
	const { lang_db_is, set_lang_db_is } = useContext(HeaderContext);
	const { lang } = useContext(RegionContext);

	return <Dropdown 	name={tree[lang].lang[lang]}
										style_box={style_box} style_cell={style_cell} 
										offset={offset}
										is={lang_db_is} set_is={set_lang_db_is}>
		<SelectRegions  style_box={style_box} style_cell={style_cell} 
								    values={Object.values(tree[lang].lang)} keys={Object.keys(tree[lang].lang)} />
	</Dropdown>
}

interface RegionProps extends DesignProps {
  children?: ReactNode,
  index: number,
  keys: string[],
}

// we cannot use key for the props because it's react reserved word
export const Region:FC<RegionProps>= ({className_box, style_box, className_cell, style_cell, keys, index, children}) => {
	const { set_lang } = useContext(RegionContext);

	function mouse_click(event: { preventDefault: () => void; }) {
		event.preventDefault();
		set_lang(keys[index]);
	}

	return <Box className={className_box} style={style_box}>
		<div className={className_cell} style={style_cell} onClick={mouse_click}>
			{children}
		</div>
	</Box>
}

interface SelectRegionProps extends DesignProps {
  children?: ReactNode,
  keys: string[],
  values?: any
}

export const SelectRegions :FC<SelectRegionProps>= ({className_box, style_box, className_cell, style_cell, values, keys}) => {
	// we cannot use key for the props because it's react reserved word
	return <>
		{values.map((elem : any, key : number) => {
			return <Region className_box={className_box} style_box={style_box} 
										className_cell={className_cell} style_cell={style_cell}
										keys={keys} index={key}>
					{elem}
				</Region>
		})}
	</>	
}



/////////////////////
// DROPDOWN TAILWIND
/////////////////////

export const ElemRegion:FC<RegionProps>= ({keys, index, children}) => {
	const { set_lang } = useContext(RegionContext);

	function mouse_click(event: { preventDefault: () => void; }) {
		event.preventDefault();
		set_lang(keys[index]);
	}

  return <MenuItem>
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
      onClick={mouse_click}
    >
      {children}
    </a>
  </MenuItem>
}

interface SelectRegionProps extends DesignProps {
  children?: ReactNode,
  keys: string[],
  values?: any
}

export const SelectRegions2 :FC<SelectRegionProps>= ({values, keys}) => {
	// we cannot use key for the props because it's react reserved word
	return <>
		{values.map((elem : any, key : number) => {
			return <ElemRegion keys={keys} index={key}>
					{elem}
				</ElemRegion>
		})}
	</>	
}


export function DropdownRegionsBig() {
  const { lang_db_is, set_lang_db_is } = useContext(HeaderContext);
	const { lang } = useContext(RegionContext);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 px-3 py-3">
        {tree[lang].lang[lang]}
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute text-right right-0 z-10 mt-2 w-20 origin-top-right rounded-md bg-stone-200 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <SelectRegions2 values={Object.values(tree[lang].lang)} keys={Object.keys(tree[lang].lang)}/>
        </div>
      </MenuItems>
    </Menu>
  )
}
