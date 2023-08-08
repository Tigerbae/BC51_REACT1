import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">A Warm Welcome!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <button className="btn btn-primary">Call to Action!</button>
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </div>
      </div>
      
    );
  }
}
