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
      } }> 로그인 버튼이다ㅏ </Button>
      </div>

    )
  }
}
