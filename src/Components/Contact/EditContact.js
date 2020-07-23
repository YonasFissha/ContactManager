import React, { Component } from "react";
import { Consumer } from "../Data/Context";
import axios from "axios";
export default class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = res.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addOnClickContact = async (dispatch, e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const { name, email, phone } = this.state;
    const updatedContact = {
      name,
      email,
      phone,
    };
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updatedContact
    );

    dispatch({
      type: "UPDATE_CONTACT",
      payload: res.data,
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch, Contacts } = value;
          return (
            <div className="card">
              <div className="card-header">Edit Contact</div>
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
                  <button className="btn btn-danger">Update Contact</button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
