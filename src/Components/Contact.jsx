import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
    };
  }

  handleChange = (e) => {
    this.setState({ phone: e.target.value });
  };

  savePhone(e) {
    localStorage["phone"] = e.target.value;
  }

  navigate = () => {
    if (this.isPhoneValid(this.state.phone)) {
      console.log("valid");
      localStorage.setItem("phone", JSON.stringify(this.state.phone));
      this.props.history.push("/finish");
    } else {
      console.log("not valid");
    }
  };

 // checks if the phone is valid
isPhoneValid = (phone) => {
  var pattern = /[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}/g;
  // var pattern = /[0-9]{6}/g;

  return pattern.test(phone) || phone == "";
}

  render() {
    return (
      <div>
        <h1> Contact</h1>
        <input
          type="phone"
          placeholder="Enter your phone"
          className="phone"
          // onBlur={this.savePhone}
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <button onClick={this.navigate}>navigate</button>
      </div>
    );
  }
}
