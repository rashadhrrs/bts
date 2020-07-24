import React, { Component } from "react";
import { create } from "apisauce";

const api = create({
    baseURL: "http://18.141.178.15:8080",
  });
  

export default class LandingPages extends Component {

    async getAll() {
        let response = await api.get("/checklist");
        console.log(JSON.stringify(response));
        if (response.statusCode === "2000") {
        }
      }

      async postChecklist() {
        let response = await api.post("/checklist");
        console.log(JSON.stringify(response));
        if (response.statusCode === "2000") {
        }
      }
      
  render() {
    return (
      <section>
        <div>

        </div>
      </section>
    );
  }
}
