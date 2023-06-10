import React, { useState } from "react";

export default function DeleteForm({ setPupInfo }) {
  const [deletePlayerId, setDeletePlayerId] = useState("");

  async function sendDeleteReq(id) {
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setPupInfo(previousPupInfo => previousPupInfo.filter(player=> player.id !== id));
      }
      setDeletePlayerId(""); 
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="Delete-Button">
      <input
        type="text"
        placeholder="Enter player ID"
        value={deletePlayerId}
        onChange={(event) => setDeletePlayerId(event.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          if (deletePlayerId) {
            sendDeleteReq(deletePlayerId);
            
            
            
          }
        }}
        disabled={!deletePlayerId}
      >
        Delete Player
      </button>
    </div>
  );
}
