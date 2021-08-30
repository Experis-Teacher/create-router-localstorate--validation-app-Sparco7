import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  saveName(e) {
    if (e.target.value) {
      console.log(e.target.value);
      // this.setState({ name: e.target.value });
      localStorage["name"] = e.target.value;
    }
  }

  navigate = () => {
    
    if (this.isValidName(this.state.name)) {
      console.log("valid");
      localStorage.setItem("name", JSON.stringify(this.state.name));
      this.props.history.push("/contact");
    } else {
      console.log("not valid");
    }
  };

// checks if the full name is valid
isValidName = (name) => {
  var pattern = /^[a-zA-Z ]+$/;
  return pattern.test(name);
}

  render() {
    return (
      <div>
        <h1> About</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="name"
          onChange={this.handleChange}
          // onChange={this.saveName}
          value={this.state.name}
        />
        <button onClick={this.navigate}>navigate</button>
      </div>
    );
  }
}
