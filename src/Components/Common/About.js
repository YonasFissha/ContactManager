import React, { Component } from "react";

export default class About extends Component {
  state = {
    title: "",
    body: "",
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1 className="display-4">
          Yonas Fissha is an Ethiopian front web designer
        </h1>
        <p>
          Here is a man with great respect for wood and handcrafted sculptures
          that “tell a story and testify to the richness of one of our most
          precious resources.” His website is light, easy to read, and filled
          with inspiring quotes and photos of his labors of love.
        </p>
      </div>
    );
  }
}
