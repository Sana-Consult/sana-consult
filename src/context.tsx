/**
 * Context
 * version 0.0.2
 * 2023-2025
 * */

//REACT
import React, { FC } from "react";
import { useState, createContext } from "react";

interface PropsContext {
  children? : React.ReactNode;
}

////////////////////
// REGION CONTEXT
////////////////////
/*
* Here it's necessary to init the context, before because this one
* it use at the top level in the gatsby-browser.js
*/

type type_region_context = {
  lang: string | null,
  set_lang: (newValue : string) => void
};

const init_region_context = {
  lang: "fr",
  set_lang: function() {}
};

export const RegionContext = createContext<type_region_context>(init_region_context);

export const RegionContextProvider: FC<PropsContext> = ({children}) => {
	const browser_is = typeof window !== "undefined";
	let language = "fr"
  if(browser_is) {
    language = window.navigator.language;
    // Problem with this feature in typeScript, maybe because it's obsolete ???
    // https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/478
		// language = window.navigator.userLanguage || window.navigator.language;
	}
	if(language !== "fr" || "de") {
		language = "en";
	}
	
  const [lang, set_lang] = useState(language);

	const setting = {
		lang, set_lang
	}
	return <RegionContext.Provider value={setting}>{children}</ RegionContext.Provider>
}




////////////////////
// HEADER CONTEXT
////////////////////
type type_header_context = {
  other_db_is: boolean | null,
  set_other_db_is: (newValue : boolean) => void
	lang_db_is: boolean | null,
  set_lang_db_is: (newValue : boolean) => void
	num_item_bd: number | null,
  set_num_item_bd: (newValue : number) => void
};

const init_header_context = {
	other_db_is: false,
  set_other_db_is: function() {},
	lang_db_is: false,
  set_lang_db_is: function() {},
	num_item_bd: 0,
  set_num_item_bd: function() {}
};



export const HeaderContext = createContext<type_header_context>(init_header_context);

export const HeaderContextProvider: FC<PropsContext> = ({children}) => {
	const [other_db_is, set_other_db_is] = useState(false);
	const [lang_db_is, set_lang_db_is] = useState(false);
	const [num_item_bd, set_num_item_bd] = useState(0);

	const setting = {
		other_db_is, set_other_db_is,
		lang_db_is, set_lang_db_is,
		num_item_bd, set_num_item_bd,
	}
	return <HeaderContext.Provider value={setting}>{children}</ HeaderContext.Provider>
}


