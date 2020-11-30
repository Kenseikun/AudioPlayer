import React from "react";
import "./SongCover.scss";

const SongCover = ({ songCover }) => {
  return (
    <div className="img__wrapper">
      <img className="img__cover" src={songCover} alt="song cover" />
    </div>
  );
};

export default SongCover;
