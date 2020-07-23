import React, { Component } from "react";
import { Switch } from "react-router-dom";
import axios from "axios";
const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        Contacts: state.Contacts.filter(
          (contact) => contact.id != action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        Contacts: [action.payload, ...state.Contacts],
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        Contacts: state.Contacts.map((contact) =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        ),
      };
    default:
      return state;
  }
};

export default class Provider extends Component {
  state = {
    Contacts: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ Contacts: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
