import React, { useEffect, useState } from "react";
import axios from "axios";
import AudioControler from "../Components/AudioControler/AudioControler";
import OwnMusicInput from "../Components/OwnMusicInput/OwnMusicInput";
import SongCover from "../Components/SongCover/SongCover";
import SongsList from "../Components/SongsList/SongsList";

import "./App.scss";

function App() {
  const songsList = [
    {
      audioUrl: "https://examples.devmastery.pl/assets/audio/hangtime.mp3",
      coverUrl: "https://examples.devmastery.pl/assets/audio/hangtime.jpg",
      title: "Hangtime",
      artist: "Wowa",
    },
    {
      audioUrl: "https://examples.devmastery.pl/assets/audio/berlin-dream.mp3",
      coverUrl: "https://examples.devmastery.pl/assets/audio/berlin-dream.jpg",
      title: "Berlin Dream",
      artist: "housefrau.me",
    },
    {
      audioUrl: "https://examples.devmastery.pl/assets/audio/they-say.mp3",
      coverUrl: "https://examples.devmastery.pl/assets/audio/they-say.jpg",
      title: "They Say",
      artist: "Pipo & Wowa",
    },
  ];
  const songURL = "https://examples.devmastery.pl/songs-api/songs";

  const [loading, setLoading] = useState(true);
  const [song, setSong] = useState([]);
  const [songPlayed, setSongPlayed] = useState(0);
  const [ownInput, setOwnInput] = useState("");

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(songURL)
  //     .then((resposne) => resposne.json())
  //     .then((data) => {
  //       setLoading(false);
  //       console.log(data);
  //       console.log(data[0].coverUrl);
  //       console.log(song);
  //       setSong(data);
  //       console.log(song);
  //     });
  // }, []);

  const getSongs = async () => {
    const users = await axios.get(songURL);
    setLoading(false);
    setSong(users.data);
  };

  useEffect(() => {
    getSongs();
  }, []);

  if (loading) return "Loading...";

  return (
    <div className="player__wrapper">
      <h1>Music Player</h1>

      <SongCover
        songCover={songsList[songPlayed].coverUrl}
        artistName={songsList[songPlayed].artist}
        songTitle={songsList[songPlayed].title}
      />

      <AudioControler
        songUrl={songsList[songPlayed].audioUrl}
        songPlayed={songPlayed}
        songsList={songsList}
        setSongPlayed={setSongPlayed}
      />
      <OwnMusicInput setOwnInput={setOwnInput} ownInput={ownInput} />

      <SongsList songsList={songsList} />
    </div>
  );
}

export default App;
