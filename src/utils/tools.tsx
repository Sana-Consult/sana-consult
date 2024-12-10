/**
 * tools function
 * 2023-2024
 * v 0.0.2
 * */


import { useState, useRef, useLayoutEffect } from "react";


export function get_css_value(name: string) {
  const browser_is = typeof window !== "undefined";
  if(browser_is) {
    return getComputedStyle(document.documentElement).getPropertyValue(name);
  } else return undefined;
}




function set_window(canvas : any) {
  // need that to pass gatsby build
  const browser_is = typeof window !== "undefined";
  if(browser_is) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
}

export function get_window() {
  let canvas = {width:0, height:0};
  set_window(canvas)

  const [size, set_size] = useState(canvas);
  useRef(size);

  useLayoutEffect(() => {
    function window_resize(event : any) {
      set_window(canvas)
      set_size(canvas)
    }
    window.addEventListener("resize", window_resize)
    return () => {
      window.removeEventListener("resize", window_resize)
    }
  }, [canvas])
  return canvas
}


export function get_width() {
  return get_window().width;
}

export function get_height() {
  return get_window().height;
}


export function width_higher_than(value : number) {
  const [arg, set_arg] = useState(0);
  const browser_is = typeof window !== "undefined";
  if(arg === 0 && browser_is) {
    set_arg(value);
  }

  if(get_width() > arg) {
    return true;
  } else return false;
}

export function height_higher_than(value : number) {
  const [arg, set_arg] = useState(0);
  const browser_is = typeof window !== "undefined";
  if(arg === 0 && browser_is) {
    set_arg(value);
  }

  if(get_width() > arg) {
    return true;
  } else return false;
}