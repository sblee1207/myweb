import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Progress} from 'semantic-ui-react'

function App() {
  return (
    <div>
    <p> D-1 코딩 어려우어ㅠㅠ </p>
    <Button Primary> 도와줭!! </Button>
    <Progress percent = {33} indicating/>
    </div>
  );
}

export default App;
