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
import './gui.css';
import { CSSProperties } from 'react';

// Define ValidLang type at the top level
type ValidLang = 'fr' | 'en' | 'de';

interface DesignProps {
  className_box?: string;
  style_box?: any;
  className_cell?: string;
  style_cell?: any;
}

///////////////////
// HAMBURGER
///////////////////
interface HamburgerProps extends DesignProps {
  children: ReactNode;
}

export function Hamburger(props: HamburgerProps) {
  return <Box className={props.className_box} style={props.style_box}>
    {props.children}
  </Box>
}


///////////////////
// BUTTON
///////////////////
interface ButtonProps {
  style: CSSProperties;
  what: string;
  to: string;
}

export const ButtonCodeNav: FC<ButtonProps> = ({style, what, to}) => {
  const [is, set_is] = useState(false);
  const toggle_button = () => {
    set_is(!is);
  }

  return (
    <NavCell to={to}>
      <code onClick={toggle_button} style={style}>{what}</code>
    </NavCell>
  )
}



/////////////
// NAVIGATION
/////////////
interface NavProps extends DesignProps {
  children?: ReactNode;
  to: string;
  className?: string;
  style?: CSSProperties;
}

export const NavCell: FC<NavProps> = ({to, className, style, children}) => {
  function mouse_click(event: React.MouseEvent) {
    event.preventDefault();
    navigate(to);
  }
  return <div className={className} style={style} onClick={mouse_click}>{children}</div>
}

export const NavCellBox: FC<NavProps> = ({to, className_box, style_box, className_cell, style_cell, children}) => {
  return <Box className={className_box} style={style_box}>
    <NavCell to={to} className={className_cell} style={style_cell}>{children}</NavCell>
  </Box>
}

export const GoHome: FC<DesignProps> = ({className_box, style_box, className_cell, style_cell}) => {
  const h = get_css_value("--height_home_cell") ?? "50px";
  const w = get_css_value("--height_home_cell") ?? "50px";

  return (
    <NavCellBox to="/" className_box={className_box} style_box={style_box} className_cell={className_cell} style_cell={style_cell}>
      <div style={{maxWidth: w, maxHeight: h}}>
        <StaticImage src="./../../medias/home.png" alt="Home" 
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
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  name?: string;
  is: boolean;
  set_is(action: boolean): void;
  offset?: string;
  value?: any;
}

export const Dropdown: FC<DropdownProps> = ({
  name,
  className_box,
  style_box,
  className_cell,
  style_cell,
  offset,
  is,
  set_is,
  children
}) => {
  function mouse_click(event: React.MouseEvent) {
    event.preventDefault();
    set_is(!is);
  }

  function close(event: React.MouseEvent) {
    event.preventDefault();
    set_is(false);
  }

  return <Box className={className_box} style={style_box}>
    <div className={className_cell} style={style_cell} onClick={mouse_click}>{name}</div>
    {is && 
      <div 
        className="dropdown-content" 
        style={{ padding: `${offset} 0` } as CSSProperties} 
        onClick={close}
      >
        {children}
      </div>
    }
  </Box>
}


export const DropdowRegions: FC<DropdownProps> = ({className_box, style_box, className_cell, style_cell, offset}) => {
  const { lang_db_is, set_lang_db_is } = useContext(HeaderContext);
  const { lang } = useContext(RegionContext);
  const safeLang = (lang ?? 'fr') as ValidLang;

  return <Dropdown name={tree[safeLang].lang[safeLang]}
                  style_box={style_box}
                  style_cell={style_cell} 
                  offset={offset}
                  is={lang_db_is ?? false}
                  set_is={set_lang_db_is}>
    <SelectRegions style_box={style_box} 
                  style_cell={style_cell}
                  region={lang}
                  values={Object.values(tree[safeLang].lang)} 
                  keys={Object.keys(tree[safeLang].lang)} />
  </Dropdown>
}

interface RegionProps extends DesignProps {
  children?: ReactNode;
  index: number;
  keys: string[];
}

export const Region: FC<RegionProps> = ({className_box, style_box, className_cell, style_cell, keys, index, children}) => {
  const { set_lang } = useContext(RegionContext);

  function mouse_click(event: React.MouseEvent) {
    event.preventDefault();
    set_lang(keys[index]);
  }

  return <Box className={className_box} style={style_box}>
    <div 
      className={className_cell} 
      style={style_cell} 
      onClick={mouse_click}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          mouse_click(e as unknown as React.MouseEvent);
        }
      }}
      aria-label={`Changer la langue vers ${children}`}
    >
      {children}
    </div>
  </Box>
}

interface SelectRegionProps extends DesignProps {
  children?: ReactNode;
  keys: string[];
  values?: any;
  region: string | null;
}

export const SelectRegions: FC<SelectRegionProps> = ({className_box, style_box, className_cell, style_cell, region, values, keys}) => {
  return <>
    {values.map((elem: any, key: number) => {
      if (keys[key] !== region) {
        return <Region 
          key={key}
          className_box={className_box}
          style_box={style_box} 
          className_cell={className_cell}
          style_cell={style_cell}
          keys={keys}
          index={key}
        >
          {elem}
        </Region>
      }
      return null;
    })}
  </>
}



/////////////////////
// DROPDOWN TAILWIND
/////////////////////

export const ElemRegion: FC<RegionProps> = ({keys, index, children}) => {
  const { set_lang } = useContext(RegionContext);

  function mouse_click(event: React.MouseEvent) {
    event.preventDefault();
    set_lang(keys[index]);
  }

  return <MenuItem>
    <a
      href="#"
      className="block px-4 py-2 text-sm text-sana_dark-400 data-[focus]:bg-sana_light-100 data-[focus]:text-sana_dark-100 data-[focus]:outline-none"
      onClick={mouse_click}
    >
      {children}
    </a>
  </MenuItem>
}

export const SelectRegionsTailwind: FC<SelectRegionProps> = ({values, keys, region}) => {
  return <>
    {values.map((elem: any, key: number) => {
      if (keys[key] !== region) {
        return <ElemRegion key={key} keys={keys} index={key}>
          {elem}
        </ElemRegion>
      }
      return null;
    })}
  </>
}


export function DropdownRegionsBig() {
  const { lang_db_is, set_lang_db_is } = useContext(HeaderContext);
  const { lang } = useContext(RegionContext);
  const safeLang = (lang ?? 'fr') as ValidLang;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton 
          className="inline-flex w-full justify-center gap-x-1.5 px-3 py-3"
          aria-label="Sélecteur de langue"
          aria-expanded={lang_db_is ?? false}
        >
          {tree[safeLang].lang[safeLang]}
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute text-right right-0 z-10 mt-2 w-20 origin-top-right rounded-md bg-sana_light-200 shadow-lg ring-1 ring-sana_red-100 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="menu">
          <SelectRegionsTailwind 
            values={Object.values(tree[safeLang].lang)} 
            keys={Object.keys(tree[safeLang].lang)} 
            region={lang}
          />
        </div>
      </MenuItems>
    </Menu>
  )
}
