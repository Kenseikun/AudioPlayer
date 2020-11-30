import React from "react";

const SongCover = ({ songCover }) => {
  return (
    <div className="img__wrapper">
      <img
        src={songCover}
        alt="song cover"
        style={{ width: 250, height: 250 }}
      />
    </div>
  );
};

export default SongCover;
