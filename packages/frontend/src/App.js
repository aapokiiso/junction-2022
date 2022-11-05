import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import placeholder from './placeholder.jpg';
import { Dropdown, Selection } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import Draggable from 'react-draggable';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>District Heating Tool</h1>
      </header>

      <div className="App-body">
        <div className="row">
          <div className="column-left">
            <h2>Set desired parameters</h2>
            <div className="infoText" >Choose an area:</div>
            <Dropdown
              placeholder="Select an option"
              className="dropdownChooser"
              options={['Otaniemi', 'Turku', 'Helsinki']}
              value="none"
              onChange={(value) => console.log('changed!', value)}
              onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
              onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
              onOpen={() => console.log('open!')}
            />
          </div>
          <div className="column-right">
            <Draggable bounds="body">
              <div className="stats">
                <h3>Overall statistics</h3>
                <p>Here we can have text that teels us stuff<br />More stuff<br />{}<br />Even more stuff</p>
              </div>
            </Draggable>
          </div>
        </div>
      </div>

      <footer className="App-footer">
        <p>
          Application created by Junkkaritiimi.
        </p>
      </footer>
    </div>
  );
}

export default App;