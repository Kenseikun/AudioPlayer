import React from "react";
import "./SongsList.scss";

const SongsList = ({
  songs,
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
          {songs.length === 0
            ? null
            : songs.map((song) => {
                const { title, audioUrl } = song;
                return (
                  <li key={title}>
                    <p
                      onClick={() => selectSongFromSongsList(song)}
                      style={{
                        color:
                          songs[songPlayed].audioUrl === audioUrl
                            ? "tomato"
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
