import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, createMuiTheme, Typography } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { muiTheme } from './theme/mui-theme';
import { RadioBox } from './components/RadioBox';
import { RadioBox3 } from './components/RadioBox3';
import { StyledButtonCollection } from './components/StyledButton'
import { Counter_HookStates } from './components/Counter_HookStates';
import { Palette } from './components/Palette';
import { RadioBox_FromContext } from './components/RadioBox_FromContext';
import {RadioButtonsProvider_Fruits } from './store';

// const theme1 = createMuiTheme();
// console.log(theme1)
console.log(muiTheme)

const App: React.FC = () => { 
  return (
    <MuiThemeProvider theme={muiTheme}>
      <RadioButtonsProvider_Fruits>
    <div className="App">
      <header className="App-header">
        
      <img src={logo} className="App-logo" alt="logo"/>
        <span>
          Edit <code>src/App.tsx</code> to <a
          className="App-link" 
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        </span>
       
      </header>
      <Button variant="contained" color="primary"> It is just a pure button component </Button>
      <Typography>Her comes the Styled Button Collection:</Typography>
      <StyledButtonCollection />
      <Typography>And the radiobox</Typography>
      <RadioBox
        boxLabel= 'hey yo'
        radioLabels= {[
          { label:'apple', id: 'epol' },
          { label:'Orangin', id: 'orange' },
          { label:'BlueSpot', id: 'bluespot' },
        ]}
        vertical= {false}
      />
      <RadioBox3
        boxLabel= 'hey yo'
        radioLabels= {[
          { label:'apple', id: 'epol' },
          { label:'Orangin', id: 'orange' },
          { label:'BlueSpot', id: 'bluespot' },
        ]}
        vertical= {false}
      />
      <Palette />
      <RadioBox_FromContext 
        boxLabel= 'hey yo'
        vertical = {false}
        radioLabels= {[
          { label:'apple', id: 'epol' },
          { label:'Orangin', id: 'orange' },
          { label:'BlueSpot', id: 'bluespot' },
        ]}      
      />
    </div>
    </RadioButtonsProvider_Fruits>
      <Counter_HookStates /* initialCount={17} */ />
    </MuiThemeProvider>
  );
}

export default App;
