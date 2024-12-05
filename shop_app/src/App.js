import logo from './logo.svg';
import React from 'react';
import './App.css';
import "./style/Style.css";

function App() {
  const element = React.createElement(
    'h1',
    { class: 'sample' },
    'JSX 출력3')
  return (element)
}

export default App;
