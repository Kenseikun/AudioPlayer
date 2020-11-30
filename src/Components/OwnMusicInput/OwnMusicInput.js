import React, { useRef } from "react";
import "./OwnMusicInput.scss";

const OwnMusicInput = ({ setOwnInput, ownInput }) => {
  //   const inputUrlRef = useRef;

  //   const handleOwnMusicInput = (e) => {
  //     const inputValue = e.target.value;
  //     setOwnInput(inputValue);
  //   };

  //   console.log(ownInput);

  return (
    <form className="own__music--container">
      <input type="text" placeholder="add your own url..." />
      <button type="submit">
        <i className="fas fa-check-circle"></i>
      </button>
    </form>
  );
};

export default OwnMusicInput;
