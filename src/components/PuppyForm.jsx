import React, { useState } from "react";


export default function PuppyForm({ setPupInfo }) {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerBreed, setNewPlayerBreed] = useState("");
  const [newPlayerPic, setNewPlayerPic] = useState(" ");

  async function sendNewPostReq(event) {
    event.preventDefault();
    try {
      const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newPlayerName,
          breed: newPlayerBreed,
          imageUrl: newPlayerPic,
        }),
      });
      const translatedData = await response.json();

      setPupInfo(previousPupInfo => [...previousPupInfo, translatedData]);
      setNewPlayerName("");
        setNewPlayerBreed("");
        setNewPlayerPic("");

       window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <form id="pup-submit-form" onSubmit={sendNewPostReq}>
      <label htmlFor="newPlayerName">Player's name:</label>
      <br/>
      <input
        name="newPlayerName"
        type="text"
        placeholder="New Player's Name "
        value={newPlayerName}
        onChange={(event) => {
          setNewPlayerName(event.target.value);
        }}
      ></input>

      <label htmlFor="newPlayerBreed">Player's breed:</label>
      <br/>
      <input
        name="newPlayerBreed"
        type="text"
        placeholder="New Player's breed"
        value={newPlayerBreed}
        onChange={(event) => {
          setNewPlayerBreed(event.target.value);
        }}
      ></input>
<label htmlFor="newPlayerPic">Player's Picture url:</label>
      <br/>
      <input
        name="newPlayerPic"
        type="url"
        placeholder="picture url"
        value={newPlayerPic}
        onChange={(event) => {
          setNewPlayerPic(event.target.value);
        }}
      ></input>




      <button type="submit" >
        
        
        Create New Player</button>

      
    </form>
  );
}
