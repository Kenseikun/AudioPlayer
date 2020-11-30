import React from "react";
import "./SongCover.scss";

const SongCover = ({ songCover, artistName, songTitle }) => {
  return (
    <div className="img__wrapper">
      <img className="img__cover" src={songCover} alt="song cover" />
      <h2>{artistName}</h2>
      <h3>{songTitle}</h3>
    </div>
  );
};

export default SongCover;
