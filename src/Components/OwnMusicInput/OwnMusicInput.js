import React, { useRef } from "react";
import "./OwnMusicInput.scss";

const OwnMusicInput = ({
  setOwnSongUrlInput,
  ownSongUrlInput,
  handleInputSongUrl,
}) => {
  return (
    <form className="own__music--container" onSubmit={handleInputSongUrl}>
      <input
        type="text"
        name="songNameUrlInput"
        placeholder="add your own url..."
      />
      <button type="submit">
        <i className="fas fa-check-square"></i>
      </button>
    </form>
  );
};

export default OwnMusicInput;
