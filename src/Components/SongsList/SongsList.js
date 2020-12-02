import React from "react";
import "./SongsList.scss";

const SongsList = ({
  songsList,
  songSelected,
  handleSelectedSong,
  songPlayed,
  selectSongFromSongsList,
}) => {
  console.log(songSelected);
  return (
    <>
      <h2>Songs List:</h2>
      <div className="songs__list--wrapper">
        <ul>
          {songsList.length === 0
            ? null
            : songsList.map((song) => {
                const { title, audioUrl } = song;
                return (
                  <li key={title}>
                    <p
                      onClick={() => selectSongFromSongsList(song)}
                      style={{
                        color:
                          songsList[songPlayed].audioUrl === audioUrl
                            ? "red"
                            : "",
                      }}
                    >
                      {title}
                    </p>
                  </li>
                );
              })}
        </ul>
      </div>
    </>
  );
};
export default SongsList;
