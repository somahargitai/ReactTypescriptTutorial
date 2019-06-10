import React, { Fragment } from 'react';
import { PaletteElement } from './style';

/*
  In this element you should check in style.tsx how
  conditional styles are implemented with Styled
  Components in embedded styles, using the double
  ampersand operator. You can find similar examples
  on styled components main page:
  https://www.styled-components.com/
*/

export const Palette = () => {
  return (
    <Fragment>
      <a href='https://coolors.co/c3a796-f8f4f3-600743-5a545c-143339'>
        <PaletteElement primary />
        <PaletteElement secondary />
        <PaletteElement third />
        <PaletteElement forth />
        <PaletteElement fifth />
      </a>
    </Fragment>
  );
}