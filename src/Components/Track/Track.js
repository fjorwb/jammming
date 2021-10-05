import React from "react";

import "./Track.css";

export class Track extends React.Component {
  renderAction() {
    if (this.props.isRemoval) {
      <button className="Track-action">-</button>;
    } else {
      <button className="Track-action">+</button>;
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>track name will go here</h3>
          <p>track artist | track album</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
