import React, { useState, Props } from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
/*
export const RadioButtonsContext_Fruits = React.createContext<any>('');

export const RadioButtonsProvider_Fruits = (props:any) => {
  const [state, setState] = useState('');
  return (
   <RadioButtonsContext_Fruits.Provider value = {[state, useState]}>
     {props.children}
   </RadioButtonsContext_Fruits.Provider>
  ) 
};
*/

type RadioButtonsContext_FruitsProps = {
  selected: string;
  setSelected: (args: string) => void;
};

export const RadioButtonsContext_Fruits = React.createContext(
  {} as RadioButtonsContext_FruitsProps
);

// this is the new stuff
interface IState {
  episodes: [],
  favourites: [],
}

const initialState: IState = {
  episodes: [],
  favourites: [],
};

export const Store = React.createContext<IState>(initialState);


function reduce() {}

export function StoreProvider(props: any): JSX.Element {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>;
}
