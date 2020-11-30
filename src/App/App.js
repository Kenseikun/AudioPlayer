import React, { useState } from "react";
import AudioControler from "../Components/AudioControler/AudioControler";
import SongCover from "../Components/SongCover/SongCover";
import SongsList from "../Components/SongsList/SongsList";

import "./App.scss";

function App() {
  // const songURL = "https://examples.devmastery.pl/songs-api/songs";

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

  const [songPlayed, setSongPlayed] = useState(0);

  return (
    <>
      <h1>Music Player</h1>
      <SongCover songCover={songsList[songPlayed].coverUrl} />
      <AudioControler
        songUrl={songsList[songPlayed].audioUrl}
        songPlayed={songPlayed}
        songsList={songsList}
        setSongPlayed={setSongPlayed}
      />

      <SongsList songsList={songsList} />
    </>
  );
}

export default App;
