import React, { Component } from "react";
import "../style.css";

class Popup extends Component {
  render() {
    const { onClosePopup } = this.props;
    return (
      <div className="holder">
        <div id="popup" className="popup">
          <div className="content">
            <h4>{this.props.text}</h4>
            <button onClick={onClosePopup}>ok</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
