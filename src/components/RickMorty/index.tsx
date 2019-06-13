import React, { useReducer, useContext } from "react";
import { Store } from '../../store';
import { async } from "q";

type Props = {};

export const RickAndMorty: React.FC<Props> = (props: Props) => {
  // const {state, dispatch} = useContext(Store);
  // 
  // const fetchDate = async () => {
  //   const date = await fetch(URL);
  //   const dataJSON = await dataJSON.json();
  //   return dispatch({
  //     type:'FETCH_DATA',
  // 
  //     payload
  //   })
  // }
  return(
    <>
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode!</p>
    </>
  )
};
