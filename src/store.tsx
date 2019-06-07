import React, { useState, Props } from 'react';
import { RadioBoxPropState } from './components/RadioBoxPropState';

export const RadioButtonsContext_Fruits = React.createContext<any>('');

export const RadioButtonsProvider_Fruits = (props:any) => {
  const [state, setState] = useState('');
  return (
   <RadioButtonsContext_Fruits.Provider value = {[state, useState]}>
     {props.children}
   </RadioButtonsContext_Fruits.Provider>
  ) 
};