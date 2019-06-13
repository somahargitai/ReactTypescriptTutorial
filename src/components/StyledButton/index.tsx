import React from 'react';
import { OneButton, OneExtendedButton } from './style';

type Props = {};

export const StyledButtonCollection: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <OneButton>OneButton</OneButton>
      <OneButton as="a">OneButton as  &lt;a&gt; </OneButton>
      <OneExtendedButton>OneButton</OneExtendedButton>
      <OneExtendedButton as="button">OneButton as  &lt;a&gt; </OneExtendedButton>
    </div>
  );
};