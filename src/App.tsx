import React, { useState, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, createMuiTheme, Typography } from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faBell,
  faCheckCircle,
  faInfo,
  faQuestionCircle,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { far, faCircle } from "@fortawesome/free-regular-svg-icons";
import { muiTheme } from "./theme/mui-theme";
import { RadioBox } from "./components/RadioBox";
import { RadioBoxWithFontaweSome } from "./components/RadioBoxWithFontawesome";
import { StyledButtonCollection } from "./components/StyledButton";
import { Counter_HookStates } from "./components/Counter_HookStates";
import { Palette } from "./components/Palette";
import { RadioBox_FromContext } from "./components/RadioBox_FromContext";
import { RadioButtonsContext_Fruits as Store } from "./store";
import { ToDoList } from "./components/ToDoList/index";
import { Something } from "./components/Something";
import { RadioBoxPropState } from "./components/RadioBoxPropState/index";
import { RadioBoxSimple } from './components/RadioBoxSimple';

library.add(
  far,
  faCircle,
  fas,
  faBell,
  faCheckCircle,
  faInfo,
  faQuestionCircle,
  faSearch
);

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
        
        <Typography>It is Typography</Typography>

        <h3> Palette </h3>
        <Palette />

        <h2> Form Elements </h2>

        <h3> Simple Buttons </h3>
        <Button variant="contained" color="primary">
          {" "}
          It is just a pure button component{" "}
        </Button>
        <Typography>Her comes the Styled Button Collection:</Typography>
        <StyledButtonCollection />

        <h3>Radioboxes</h3>
        <h4> Simple RadioBox with default Material UI layout </h4>
        <RadioBoxSimple
          radioLabels={[
            { label: "one", id: "one" },
            { label: "two", id: "two" },
            { label: "three", id: "three" }
          ]}
        />

        <h4>RadioBox with Fontawesome Icons</h4>
        <RadioBoxWithFontaweSome
          boxLabel="These are fruits"
          radioLabels={[
            { label: "apple", id: "apple" },
            { label: "Orange", id: "orange" },
            { label: "Pear", id: "pear" }
          ]}
          vertical={false}
        />

        <h4>Radiobox</h4>
        <RadioBox
          boxLabel="Famous people"
          radioLabels={[
            { label: "Abe Lincoln", id: "abe" },
            { label: "Tintin", id: "tintin" },
            { label: "Gentleman Jack", id: "jack" }
          ]}
          vertical={false}
        />

        <h4> RadioBox with Prop State </h4>
        <RadioBoxPropState
          boxLabel="Countries"
          value={state}
          setValue={setState}
          radioLabels={[
            { label: "Nepal", id: "nepal" },
            { label: "Vanuatu", id: "vanuatu" },
            { label: "Monaco", id: "monaco" }
          ]}
          vertical={false}
        />

        <h4> RadioBox From Context </h4>
        <RadioBox_FromContext
          boxLabel="Mathematics"
          vertical={false}
          radioLabels={[
            { label: "Geometry", id: "geom" },
            { label: "Algebra", id: "algebra" },
            { label: "Topology", id: "top" }
          ]}
        />

        <h3> Counter </h3>
        <Counter_HookStates /* initialCount={17} */ />

        <h3> Text Area </h3>
        <ToDoList />

        <h3> That's all, Folks! </h3>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
