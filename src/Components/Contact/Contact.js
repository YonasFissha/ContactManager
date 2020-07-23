import React, { Component } from "react";
import { Consumer } from "../Data/Context";
import { Link } from "react-router-dom";
import axios from "axios";
export default class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  showOnClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
    });
  };
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      console.log(e);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  onClickRedirect = (id) => {};
  render() {
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">
                {this.props.name}
                <i
                  className="fa fa-trash float-right m-1"
                  style={{ cursor: "pointer" }}
                  onClick={this.onDeleteClick.bind(
                    this,
                    this.props.id,
                    dispatch
                  )}
                ></i>

                <Link to={`/editcontact/${this.props.id}`}>
                  {" "}
                  <i
                    className="fa fa-pencil text-dark float-right m-1"
                    style={{ cursor: "pointer" }}
                  ></i>
                </Link>
                {showContactInfo ? (
                  <i
                    className="fa fa-caret-square-o-up float-right m-1"
                    style={{ cursor: "pointer" }}
                    onClick={this.showOnClick}
                  ></i>
                ) : (
                  <i
                    className="fa fa-caret-square-o-down float-right m-1"
                    style={{ cursor: "pointer" }}
                    onClick={this.showOnClick}
                  ></i>
                )}
              </div>

              {showContactInfo ? (
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <i className="fa fa-envelope mr-2"></i>
                      {this.props.email}
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-phone-square mr-2 "></i>
                      {this.props.phone}
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
