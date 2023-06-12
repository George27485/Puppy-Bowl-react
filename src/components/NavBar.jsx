import { useState, useEffect } from 'react';


//Nav bar code used for project in Puppylist.jsx



  



export default function NavBar({pupInfo, setPupInfo}) {
    
  const [searchQuery, setSearchQuery] = useState('');

//test code


useEffect(() => {
  async function fetchPup() {
    try {
      const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players");
      const data = await response.json();
      const players = data.data.players;
      setPupInfo(players);
    } catch (error) {
      console.error(error);
    }
  }
  fetchPup();
}, []);


//end test
  



  const filteredDog = pupInfo.filter((singleDog) => {
    const lowercasedName = singleDog.name.toLowerCase();
    const lowercasedQuery = searchQuery.toLowerCase();

     (lowercasedName.includes(lowercasedQuery));
  });


  
  return (
    <div>
      <form>
        <label htmlFor="search-query">Search By Name Here: </label>
        <input
          name="search-query"
          type="text"
          placeholder="Type here"
          value={searchQuery}
          onChange={(event) => {
            console.log(event.target.value);
            setSearchQuery(event.target.value);
          }}
        />
      </form>

      {filteredDog.length ? (
        filteredDog.map((singleDog, idx) => (
          <div key={idx}>
            <h2>{singleDog.name}</h2>
            
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}




