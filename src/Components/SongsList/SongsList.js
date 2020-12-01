import React from "react";
import "./SongsList.scss";

const SongsList = ({ songsList }) => {
  return (
    <>
      <h2>Songs List:</h2>
      <div className="songs__list--wrapper">
        <ul>
          {songsList.map((song) => {
            return (
              <li key={song.title}>
                <p>{song.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default SongsList;
