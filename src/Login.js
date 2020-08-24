import React, { Component } from "react";
import fire from "./config/Fire";
//import fire from './config/Fire';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .catch((error) => {
        alert("Invalid login credentials!");
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="col-md-6">
        <form>
          <h3>Sign In</h3>

          <div className="form-group">
            <label for="exampleInputEmail">Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              id="exampleInputEmail1"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              id="exampleInputPassword1"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            onClick={this.login}
            className="btn btn-primary"
          >
            Login
          </button>
          <button
            onClick={this.signup}
            style={{ marginLeft: "25px" }}
            className="btn btn-success"
          >
            Sign-up
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
