import React, { useState, useReducer, Props } from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
/*
export const RadioButtonsContext_Fruits = React.createContext<any>('');

export const RadioButtonsProviderFruits = (props:any) => {
  const [state, setState] = useState('');
  return (
   <RadioButtonsContext_Fruits.Provider value = {[state, useState]}>
     {props.children}
   </RadioButtonsContext_Fruits.Provider>
  ) 
};
*/

type RadioButtonsContextFruitsProps = {
  selected: string;
  setSelected: (args: string) => void;
};

export const RadioButtonsContextFruits = React.createContext(
  {} as RadioButtonsContextFruitsProps
);

// this is the new stuff
interface IState {
  episodes: [];
  favourites: [];
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  episodes: [],
  favourites: []
};

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    /* ...state will be the content of a IState, so episodes 
       and favourites arrays.
      The episodes:action.payload will be a new episodes array
       with the content from the action object
      So this lines returns an object, containing the
       favourites array and an episodes array, created from
       the old and the new episodes array. Hence this is a
       IState object. */
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
