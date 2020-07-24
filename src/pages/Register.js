import React, { Component } from "react";
import { create } from "apisauce";
import Login from 'pages/Login';
import { Button } from "@material-ui/core";


const api = create({
  baseURL: "http://18.141.178.15:8080",
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultPayload: {
        email: "",
        password: "",
        username: "",
      },
      loginVisible: false,
    };
    this.handleSave = this.handleSave.bind(this);
  }

  async handleSave(payload) {
    payload = {
      email: payload.email,
      password: payload.password,
      username: payload.username,
    };
    console.log(JSON.stringify(payload));
    let response = await api.post("/register", payload);
    console.log(JSON.stringify(response));
    if (response.data.statusCode === 2000) {
        this.setState({loginVisible: true})
    }
  }

  render() {
    return (
      <div className="sign-in">
        <div>
          <div className="mb-3">
            <label>Email</label>
            <div>
              <input
                type="text"
                style={{ width: 500, height: 50 }}
                onChange={(e) =>
                  this.setState({
                    defaultPayload: {
                      ...this.state.defaultPayload,
                      email: e.target.value,
                    },
                  })
                }
              ></input>
            </div>
          </div>
          <div className="mb-3">
            <label>Username</label>
            <div>
              <input
                type="text"
                style={{ width: 500, height: 50 }}
                onChange={(e) =>
                  this.setState({
                    defaultPayload: {
                      ...this.state.defaultPayload,
                      username: e.target.value,
                    },
                  })
                }
              ></input>
            </div>
          </div>
          <div className="mb-5">
            <label>Password</label>
            <div>
              <input
                type="text"
                style={{ width: 500, height: 50 }}
                onChange={(e) =>
                  this.setState({
                    defaultPayload: {
                      ...this.state.defaultPayload,
                      password: e.target.value,
                    },
                  })
                }
              ></input>
            </div>
          </div>
          <div className="mb-3">
          <Button
            variant="contained"
            color="primary"
            style={{ width: 500 }}
            onClick={() => this.handleSave(this.state.defaultPayload)}
          >
            SIGN UP
          </Button>
          </div>
          <Button
            variant="contained"
            color="primary"
            style={{ width: 500 }}
            href="/login"
          >
            LOG IN
          </Button>
        </div>
        {this.state.loginVisible && (
         <Login/>
            )}
      </div>
      
    );
  }
}

export default Register;
