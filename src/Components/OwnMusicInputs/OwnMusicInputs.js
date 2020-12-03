import React from "react";
import "./OwnMusicInputs.scss";

const OwnMusicInputs = ({
  setOwnSongUrlInput,
  ownSongUrlInput,
  handleInputSongUrl,
}) => {
  return (
    <form className="own__music--container" onSubmit={handleInputSongUrl}>
      <input
        type="text"
        name="songTitleUrlInput"
        placeholder="add your song title..."
        required
      />

      <input
        type="text"
        name="songUrlInput"
        placeholder="add your own url..."
        required
      />
      <button type="submit">
        <i className="fas fa-check-square"></i>
      </button>
    </form>
  );
};

export default OwnMusicInputs;
