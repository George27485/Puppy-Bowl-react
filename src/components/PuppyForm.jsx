import React, { useState } from "react";


export default function PuppyForm({ setPupInfo }) {
  const [newPlayerName, setNewPlayerName] = useState(" ");
  const [newPlayerBreed, setNewPlayerBreed] = useState(" ");
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
    <form onSubmit={sendNewPostReq}>
      <label htmlFor="newPlayerName">Enter new player's name:</label>
      <br/>
      <input
        name="newPlayerName"
        type="text"
        placeholder="New player's name goes here"
        value={newPlayerName}
        onChange={(event) => {
          setNewPlayerName(event.target.value);
        }}
      ></input>

      <label htmlFor="newPlayerBreed">Enter new player's breed:</label>
      <br/>
      <input
        name="newPlayerBreed"
        type="text"
        placeholder="New player's breed goes here"
        value={newPlayerBreed}
        onChange={(event) => {
          setNewPlayerBreed(event.target.value);
        }}
      ></input>
<label htmlFor="newPlayerPic">Enter new player's Picture url:</label>
      <br/>
      <input
        name="newPlayerPic"
        type="url"
        placeholder="New player's picture goes here"
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
