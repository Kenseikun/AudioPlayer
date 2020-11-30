import React, { useRef, useState } from "react";
import "./AudioControler.scss";

const AudioControler = ({ songUrl, songPlayed, setSongPlayed, songsList }) => {
  const audioRef = useRef();

  const [isClicked, setIsClicked] = useState(true);

  const handleAudioPlay = () => {
    audioRef.current.play();
    setIsClicked(!isClicked);
  };

  const handleAudioPause = () => {
    audioRef.current.pause();
    setIsClicked(!isClicked);
  };

  const nextSong = () => {
    if (songPlayed < songsList.length - 1) {
      setSongPlayed(songPlayed + 1);
      audioRef.current.play();
    } else {
      alert("There is no more songs in your list...");
    }
  };

  const prevSong = () => {
    if (songPlayed > 0) {
      setSongPlayed(songPlayed - 1);
      audioRef.current.play();
    } else {
      alert("There is no more songs in your list...");
    }
  };

  return (
    <div className="audio__controler__wrapper">
      <audio ref={audioRef} key={songUrl} controls>
        <source src={songUrl} />
      </audio>

      <div className="btns__wrapper">
        <button onClick={prevSong}>prev Song</button>
        {isClicked ? (
          <button onClick={handleAudioPlay}>Play</button>
        ) : (
          <button onClick={handleAudioPause}>Pause</button>
        )}

        <button onClick={nextSong}>next Song</button>
      </div>
    </div>
  );
};

export default AudioControler;
