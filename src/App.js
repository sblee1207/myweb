import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Progress} from 'semantic-ui-react'

function App() {
  return (
    <div>
<p> Day 1 </p>
<Button Primary> help </Button>
<Progress percent = {66} indicating/>
</div>
  );
}

export default App;
