import React, { Component } from "react";
import fire from "./config/Fire";
import io from "socket.io-client";
const ENDPOINT = "http://localhost:8000/";

//Creating socket to connect to SERVER
var socket = io.connect(ENDPOINT);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button1: false,
      button2: false,
    };
    this.click1 = this.click1.bind(this);
    this.click2 = this.click2.bind(this);
    this.setButton1 = this.setButton1.bind(this);
    this.setButton2 = this.setButton2.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  click1() {
    console.log("Clicked button 1");
    socket.emit("connect1", {
      clicked: true,
    });
  }

  click2() {
    socket.emit("connect2", {
      clicked: true,
    });
    console.log("Clicked Button 2");
  }

  setButton1() {
    this.setState((buttonState) => ({
      button1: !this.state.button1,
    }));
  }

  setButton2() {
    this.setState((buttonState) => ({
      button2: !this.state.button2,
    }));
  }

  componentWillMount() {
    console.log("Component WILL MOUNT!");
    socket.on("connect1", (data) => {
      if (data.clicked === true) {
        this.setButton1();
        console.log(data, "Button 1 clicked From Server");
      }
    });

    socket.on("connect2", (data) => {
      if (data.clicked === true) {
        this.setButton2();
        console.log(data, "Button 2 clicked From Server");
      }
    });
  }

  render() {
    return (
      <div className="col-md-6">
        <h1> You are Home!</h1>
        <button
          className="btn btn-warning"
          onClick={this.click1}
          id="button1"
          disabled={this.state.button1}
        >
          Button 1
        </button>{" "}
        &nbsp;
        <button
          className="btn btn-warning"
          onClick={this.click2}
          id="button2"
          disabled={this.state.button2}
        >
          Button 2
        </button>
        <br></br>
        <br></br>
        <button onClick={this.logout} className="btn btn-danger">
          Logout
        </button>
      </div>
    );
  }
}

export default Home;
