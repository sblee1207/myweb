import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Progress, Input} from 'semantic-ui-react'

function Login2(){

  return(
    <div>
    <Input/>
    <Button onClick = { (e) => {
      console.log(e)
      alert(e.target.value)
    } }> 로그인! </Button>
    </div>

  )
}

class Login extends React.Component{
  constructor(){
    super()
    this.state = {id : "끼얏호우"}
  }

  render(){
    return(
      <div>
      <Input onChange = { (e) => this.setState({id : e.target.value })  }/>
      <Button onClick = { (event) => {
        alert(this.state.id)
      } }> 리얼 로그인이다ㅏ </Button>
      </div>

    )
  }
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
