import logo from './logo.svg';
import './App.css';
import { createContext, useContext, Fragment, useState } from 'react';

const MyContext = createContext();
const MyContext2 = createContext();

function First() {
  const [text, setText] = useState("");
  return (
      <MyContext.Consumer>
        {([data, setData]) => {
          return (
            <Fragment>
              <label> First test </label>
              <input type="text" value={text} onChange={(event) => {setText(event.target.value)}}/>
              <button onClick={() => setData(text)}> Press  </button> 
            </Fragment>
          )
        }}
      </MyContext.Consumer>
  )
}

function Second() {
  return (
    <MyContext.Consumer>
      {([data, setData]) => {
        return (
          <label>Second test: {data} </label>
        )
      }}
    </MyContext.Consumer>
  )
}

function Third() {
  const [text, setText] = useState("");
  const { setData } = useContext(MyContext2);
  return (
    <Fragment>
      <label> Third test </label>
      <input type="text" value={text} onChange={(event) => {setText(event.target.value)}}/>
      <button onClick={() => setData(text)}> Press  </button> 
    </Fragment>
  )
}

function Fourth() {
  const { data } = useContext(MyContext2);
  return (
    <label>Fourth test: {data} </label>
  )
}

function App() {
  const [state, setState] = useState("");
  const [data, setData] = useState("");
  return (
      <div className="App">
        <MyContext.Provider value={[state, setState]}>
          <First/>
          <hr/>
          <Second/>
        </MyContext.Provider>
          <hr/>
        <MyContext2.Provider value={{data, setData}}>
          <Third/>
          <hr/>
          <Fourth/>
        </MyContext2.Provider>
      </div>
  );
}

export default App;
