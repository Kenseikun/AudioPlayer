import React, { useEffect, useState } from "react";

import AudioControler from "../Components/AudioControler/AudioControler";
import OwnMusicInputs from "../Components/OwnMusicInputs/OwnMusicInputs";
import SongCover from "../Components/SongCover/SongCover";
import SongsList from "../Components/SongsList/SongsList";

import "./App.scss";

function App() {
  const [songs, setSongs] = useState([]);
  const [songPlayed, setSongPlayed] = useState(0);
  const [loading, setLoading] = useState(true);

  const [ownSongUrlInput, setOwnSongUrlInput] = useState("");
  const [songSelected, setSongSelected] = useState([]);

  const songURL = "https://examples.devmastery.pl/songs-api/songs";

  useEffect(() => {
    setLoading(true);
    fetch(songURL)
      .then((resposne) => resposne.json())
      .then((data) => {
        setLoading(false);
        setSongs(data);
        // setSongSelected(songs);
        // setSongSelected([...songs]);
      });
  }, []);

  if (loading) return "Loading...";

  const handleInputSongUrl = (e) => {
    e.preventDefault();
    const audioUrl = e.target.songNameUrlInput.value;
    // const productId = Math.floor(Math.random() * 1000);

    const newSong = {
      artist: "noName",
      audioUrl,
      coverUrl: "https://examples.devmastery.pl/assets/audio/hangtime.jpg",
      title: "noName",
    };
    setSongs([...new Set([...songs, newSong])]);
    e.target.reset();
  };

  const handleSelectedSong = (audioUrl) => {
    const songSelectedArray = songSelected.map((song) => {
      if (song.audioUrl === audioUrl) {
        console.log(songSelected);
      }
      return song;
    });

    setSongSelected([...songSelectedArray]);
  };

  const selectSongFromSongsList = (song) => {
    const indexOfSongIChooseToPlay = songs.indexOf(song);
    console.log(indexOfSongIChooseToPlay);

    setSongPlayed(indexOfSongIChooseToPlay);
  };

  return (
    <div className="player__wrapper">
      <h1>Music Player</h1>

      {songs.length === 0 ? null : (
        <>
          <SongCover
            songCover={songs[songPlayed].coverUrl}
            artistName={songs[songPlayed].artist}
            songTitle={songs[songPlayed].title}
          />

          <AudioControler
            songUrl={songs[songPlayed].audioUrl}
            songPlayed={songPlayed}
            songsList={songs}
            setSongPlayed={setSongPlayed}
          />

          <OwnMusicInputs
            setOwnInput={setOwnSongUrlInput}
            ownInput={ownSongUrlInput}
            handleInputSongUrl={handleInputSongUrl}
          />

          <SongsList
            songsList={songs}
            songPlayed={songPlayed}
            handleSelectedSong={handleSelectedSong}
            songSelected={songSelected}
            selectSongFromSongsList={selectSongFromSongsList}
          />
        </>
      )}
    </div>
  );
}

export default App;

// 19:30
