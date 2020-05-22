import React, { Component } from "react";
import Header from "./Header";
import Login from "./Login"

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Anthony",
      username: "",
      password: "",
    };
  }
  onInput = ({ target }) => {
    let { name, value } = target;
    this.setState({ [name]: value });
  };
  onClick = () => {
    this.setState({ name: this.state.username });
  };
  render() {
    return (
      <div>
        <Header name={this.state.name} />
        <Login onclick={this.onClick} oninput={this.onInput} state={this.state}/>
      </div>
    );
  }
}
export default Home;
