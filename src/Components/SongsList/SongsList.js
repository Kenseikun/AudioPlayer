import React from "react";
import "./SongsList.scss";

const SongsList = ({ songsList }) => {
  return (
    <>
      <div className="songs__list--wrapper">
        <h2>Songs List:</h2>
        <ul>
          {songsList.map((song) => {
            return <li key={song.title}>{song.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
export default SongsList;
