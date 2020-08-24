import React, { Component } from "react";
import fire from "./config/Fire";
//import fire from './config/Fire';

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div className="col-md-6">
        <h1> You are Home!</h1>
        <button className="btn btn-warning">Button 1</button> &nbsp;
        <button className="btn btn-info">Button 2</button>
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
