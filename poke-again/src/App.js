import React, {Component} from 'react';
import LoginForm from "./LoginContainer/LoginForm"
import PokemonIndex from "./PokemonIndex/PokemonIndex"
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      logged: false,
      username: '',
    }
  }
  
  login = (username) => {
    this.setState({
      logged: true,
      username: username,
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Enter a username and password to meet a POKEMON!</h1>
        {
        this.state.logged ? 
        <PokemonIndex username={this.state.username}/> 
        : 
        <LoginForm login={this.login} />}
      </div>
    );
  }
}

export default App;

