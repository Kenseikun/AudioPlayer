import React, { useEffect, useState } from "react";

import AudioControler from "../Components/AudioControler/AudioControler";
import OwnMusicInput from "../Components/OwnMusicInput/OwnMusicInput";
import SongCover from "../Components/SongCover/SongCover";
import SongsList from "../Components/SongsList/SongsList";

import "./App.scss";

function App() {
  const [songs, setSongs] = useState([]);
  const [songPlayed, setSongPlayed] = useState(0);
  const [loading, setLoading] = useState(true);

  const [ownSongUrlInput, setOwnSongUrlInput] = useState("");

  const songURL = "https://examples.devmastery.pl/songs-api/songs";

  useEffect(() => {
    setLoading(true);
    fetch(songURL)
      .then((resposne) => resposne.json())
      .then((data) => {
        setLoading(false);
        setSongs(data);
      });
  }, []);

  console.log(songs);
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

    setSongs([...songs, newSong]);
    console.log(songs);

    e.target.reset();
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
          <OwnMusicInput
            setOwnInput={setOwnSongUrlInput}
            ownInput={ownSongUrlInput}
            handleInputSongUrl={handleInputSongUrl}
          />

          <SongsList songsList={songs} />
        </>
      )}
    </div>
  );
}

export default App;
