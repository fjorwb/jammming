import React from "react";

import Track from "../Track/Track";

import "./TrackList.css";

export class TrackList extends React.Component {
  render() {
    return (
      <div class="TrackList">
        {this.props.tracks.map((track) => {
          return <Track track={track} key={track.id} />;
        })}
      </div>
    );
  }
}

export default TrackList;
