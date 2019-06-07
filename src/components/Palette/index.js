import React, { useState, Fragment } from 'react';
import { PaletteElement } from './style';
import { RadioBoxPropState } from '../RadioBoxPropState';

export const Palette = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(17);
  const [radioSelection, setRadioSelection] = useState('');

  return (
    <Fragment>
      <a href='https://coolors.co/c3a796-f8f4f3-600743-5a545c-143339'>
        <PaletteElement primary />
        <PaletteElement secondary />
        <PaletteElement third />
        <PaletteElement forth />
        <PaletteElement fifth />
      </a>
      <RadioBoxPropState
        boxLabel= 'hey yo'
        value = {radioSelection}
        setValue = {setRadioSelection}
        radioLabels= {[
          { label:'some',    id: 'abc12' },
          { label:'thing',  id: 'abc21' },
          { label:'blue', id: 'abc23' },
        ]}
        vertical= {false}
      />
    </Fragment>
  );
}