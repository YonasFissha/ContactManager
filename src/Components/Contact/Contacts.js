import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../Data/Context";
import { Link } from "react-router-dom";
export default class extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { Contacts } = value;
          {
            if (Contacts.length == 0) {
              return (
                <div>
                  <h3 className="mb-2">
                    <span className="text-danger">Contact</span> List{" "}
                    <span className="badge badge-danger">
                      {Contacts.length}
                    </span>
                    <Link
                      to="/addcontact"
                      className="btn btn-danger btn-sm float-right"
                    >
                      Add New Contact
                    </Link>
                  </h3>
                  <h5 className="mt-2">
                    There is nothing in your contact list
                  </h5>
                </div>
              );
            }
          }
          {
            if (Contacts.length > 0) {
              return (
                <div>
                  <h3>
                    <span className="text-danger">Contact</span> List{" "}
                    <span className="badge badge-danger">
                      {Contacts.length}
                    </span>
                    <Link
                      to="/addcontact"
                      className="btn btn-danger btn-sm float-right"
                    >
                      Add New Contact
                    </Link>
                  </h3>
                  {Contacts.map((contact) => (
                    <React.Fragment>
                      <Contact
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        email={contact.email}
                        phone={contact.phone}
                      ></Contact>
                    </React.Fragment>
                  ))}
                </div>
              );
            }
          }
        }}
      </Consumer>
    );
  }
}
