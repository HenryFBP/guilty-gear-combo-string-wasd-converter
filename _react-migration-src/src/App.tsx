import React from 'react';
import logo from './logo.svg';
import './App.css';

class GGWASDConverter extends React.Component {
  render() {
    return (
      <div>
        <ComboInput />
        <ComboOutput>test :3</ComboOutput>
      </div>
    )
  }
}

class ComboInput extends React.Component {

  state = {
    comboString: '5K > 6S > 236K potato'
  };

  render() {
    return (
      <div>
        <h2>Input combo string to convert</h2>
        <input id="inputString" defaultValue={this.state.comboString} />
      </div>
    );
  }
}

const ComboOutput = (props: any) => {
  return (
    <div id="outputDiv">
      <h2>Output</h2>
      <p id="output">{props.children}</p>
    </div>
  );

}

function App() {
  return <GGWASDConverter />;
}

export default App;
