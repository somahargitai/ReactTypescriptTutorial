import React, { Component } from 'react';
import { RadioItem, RadioWrapper, RadioInput } from './style';
import { ReactComponent as Tick } from './tick.svg';
import {useState, useEffect } from 'react';

type TAppProps = {
  boxLabel: any;
  radioLabels: Array<Object>;
}

const RadioBox33: React.FC<TAppProps> = (props:any) => {

  console.log(props.boxLabel);
  console.log(props.radioLabels);
  console.log(props.radioLabels[1].rd_label);
  const [ size, setSize ] = useState<string>('');

  const handleChange = (e:any) => {
    setSize(size);
  }

  const handleSubmit = (event:any) => {
      event.preventDefault();        
      alert(`You chose the ${size} radio button.`);
  }

  const label = (props:any) => {
    const boxLabel = props.boxLabel;
    if (boxLabel) {
      return <p> {boxLabel} </p>;
    }
    return;
  }
  return (
    <RadioItem>soma</RadioItem>
    // <form className='RadioBox' onSubmit={ handleSubmit }>  
    //  <RadioWrapper>
    //  { label(props) }
    //  { props.radioLabels.map( (radioItem:any) =>
    //    <RadioItem>
    //      <RadioInput
    //        id =  { radioItem.id }
    //        label =  { radioItem.rd_label }
    //        checked = { size === radioItem.id }
    //        onChange = { handleChange }
    //      />
    //      <label for={radioItem.id}>
    //        <span><Tick /></span>
    //        <p> {radioItem.label} </p>
    //      </label>*/}
    //      </RadioItem> 
    //  )}; 
    // </RadioWrapper>
    //  <button type="submit">Submit choice</button>
    // </form>
  );
}

export default RadioBox33;