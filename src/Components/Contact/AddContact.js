import React, { Component } from "react";
import { Consumer } from "../Data/Context";
import axios from "axios";
export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addOnClickContact = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      name,
      email,
      phone,
    };
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );

    dispatch({ type: "ADD_CONTACT", payload: res.data });

    this.props.history.push("/");
  };
  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card">
              <div className="card-header">Add New Contact</div>
              <div className="card-body">
                <form onSubmit={this.addOnClickContact.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div>
                  <button className="btn btn-danger">Add Contact</button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
