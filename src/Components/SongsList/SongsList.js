import React from "react";
import "./SongsList.scss";

const SongsList = ({ songsList }) => {
  return (
    <div className="songs__list--wrapper">
      <ul>
        {songsList.map((song) => {
          return <li key={song.title}>{song.title}</li>;
        })}
      </ul>
    </div>
  );
};
export default SongsList;
