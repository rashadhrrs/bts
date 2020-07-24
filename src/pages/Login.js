import React, { Component } from "react";
import { Checkbox } from "@material-ui/core";
import { create } from "apisauce";
import LandingPages from 'pages/LandingPages';
import { Button } from "@material-ui/core";



const api = create({
  baseURL: "http://18.141.178.15:8080",
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultPayload: {
        password: "",
        username: "",
      },
      landingVisible: false,
    };
    this.handleSave = this.handleSave.bind(this);
  }

  async handleLogin(payload) {
    payload = {
      password: payload.password,
      username: payload.username,
    };
    console.log(JSON.stringify(payload));
    let response = await api.post("/login", payload);
    console.log(response);
    if (response.statusCode === "2000") {
        this.setState({landingVisible: true})
    }
  }

  render() {
    return (
      <div className="sign-in">
        <div>
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
          <div className="mb-3">
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
          <div className="mb-5">
            <Checkbox title="Ingat akun saya"></Checkbox>
            <span>Ingat akun saya</span>
            <span style={{ marginLeft: 210, color: "red", cursor: "pointer" }}>
              {" "}
              LUPA KATA SANDI
            </span>
          </div>
          <Button
            variant="contained"
            color="primary"
            style={{ width: 500 }}
            onClick={() => this.handleSave(this.state.defaultPayload)}
          >
            LOG IN
          </Button>
          <div className="mt-5">
            <p style={{ textAlign: "center" }}>
              BELUM MEMILIKI AKUN? <span style={{ color: "blue" }}>DAFTAR</span>
            </p>
          </div>
        </div>
        {this.state.landingVisible && (
        <LandingPages/>
            )}
      </div>
    );
  }
}

export default Login;
