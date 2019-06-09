import React, { useState, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, createMuiTheme, Typography } from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faBell, faCheckCircle, faInfo, faQuestionCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { far, faCircle } from '@fortawesome/free-regular-svg-icons';
import { muiTheme } from "./theme/mui-theme";
import { RadioBox } from "./components/RadioBox";
import { RadioBox3 } from "./components/RadioBox3";
import { StyledButtonCollection } from "./components/StyledButton";
import { Counter_HookStates } from "./components/Counter_HookStates";
import { Palette } from "./components/Palette";
import { RadioBox_FromContext } from "./components/RadioBox_FromContext";
import { RadioButtonsContext_Fruits as Store } from "./store";
import { ToDoList } from "./components/ToDoList/index";
import { Something } from "./components/Something";
 
library.add(far, faCircle, fas, faBell, faCheckCircle, faInfo, faQuestionCircle, faSearch);

// const theme1 = createMuiTheme();
// console.log(theme1)
console.log(muiTheme);

const App: React.FC = () => {
  const store = useContext(Store);
  const [state, setState] = useState("");

  return (
    <MuiThemeProvider theme={muiTheme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>
            Edit <code>src/App.tsx</code> to{" "}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </span>
        </header>
        <Something />
        <h2> Simple Buttons </h2>
        <Button variant="contained" color="primary">
          {" "}
          It is just a pure button component{" "}
        </Button>
        <Typography>Her comes the Styled Button Collection:</Typography>
        <StyledButtonCollection />
        <Typography>It is Typography</Typography>
        <h2>Radioboxes</h2>
        <h3>Radiobox</h3>
        <RadioBox
          boxLabel="hey yo"
          radioLabels={[
            { label: "apple", id: "epol" },
            { label: "Orangin", id: "orange" },
            { label: "BlueSpot", id: "bluespot" }
          ]}
          vertical={false}
        />
        <h3>Radio3</h3>
        <RadioBox3
          boxLabel="hey yo"
          radioLabels={[
            { label: "apple", id: "epol" },
            { label: "Orangin", id: "orange" },
            { label: "BlueSpot", id: "bluespot" }
          ]}
          vertical={false}
        />
        <h2> Palette </h2>
        <Palette />
        <h2>  RadioBox From Context  </h2>
        <RadioBox_FromContext
          boxLabel="hey yo"
          vertical={false}
          radioLabels={[
            { label: "apple", id: "epol" },
            { label: "Orangin", id: "orange" },
            { label: "BlueSpot", id: "bluespot" }
          ]}
        />
        <h2> Counter </h2>
        <Counter_HookStates /* initialCount={17} */ />
        <h2> Text Area </h2>
        <ToDoList />
        
        <h2> That's all, Folks! </h2>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
