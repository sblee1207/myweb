import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Progress, Input} from 'semantic-ui-react'

function Login(){

  return(
    <div>
    <Input/>
    <Button primary> 로그인! </Button>
    </div>

  )
}


function App() {
  return (
    <div>
<p> Day 2(1) </p>
<Button Primary> help </Button>
<Progress percent = {10} indicating/>
<Login / >
</div>
  );
}

export default App;
