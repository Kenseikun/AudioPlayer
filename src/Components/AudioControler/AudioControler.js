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
      setIsClicked(true);
    } else {
      alert("There is no more songs on your list...");
    }
  };

  const prevSong = () => {
    if (songPlayed > 0) {
      setSongPlayed(songPlayed - 1);
      setIsClicked(true);
    } else {
      alert("There is no more songs on your list...");
    }
  };

  return (
    <div className="audio__controler__wrapper">
      <audio ref={audioRef} key={songUrl}>
        <source src={songUrl} />
      </audio>

      <div className="btns__wrapper">
        <button onClick={prevSong}>
          <i className="fas fa-backward"></i>
        </button>
        {isClicked ? (
          <button onClick={handleAudioPlay}>
            <i className="fas fa-play-circle"></i>
          </button>
        ) : (
          <button onClick={handleAudioPause}>
            <i className="fas fa-pause-circle"></i>
          </button>
        )}

        <button onClick={nextSong}>
          <i className="fas fa-forward"></i>
        </button>

        <div></div>
      </div>
    </div>
  );
};

export default AudioControler;
