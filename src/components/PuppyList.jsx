import React from "react";
import { useState,useEffect } from "react";
import PuppyRow from "./PuppyRow";



export default function PuppyList({setSelectedPupId}){
    const[pupInfo, setPupInfo] = useState([]);
   
 //test containers for seaarch bar
 const [searchQuery, setSearchQuery] = useState("")
 //end test
    useEffect(() =>{
        async function fetchPup(){
            try{
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players");
                const data = await response.json();
                const players = data.data.players
                setPupInfo(players);
                
            } catch(error){
                console.error(error);
            }
        }
        fetchPup();
    }, [])
//test code for search bar


const filteredPuppies = pupInfo.filter((pup) =>
pup.name.toLowerCase().includes(searchQuery.toLowerCase())
);

const handlePuppyClick = () => {
setSelectedPupId(puppyId);
};




//test end


    return (
        
<div>
<form id="search-bar-form">
        <label htmlFor="search-query">Search: </label>
        <input
          name="search-query"
          type="text"
          placeholder="Type Name Here"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </form>


<div id= "pup-card">
        <table>
            <thead>
                <tr>
                    <th id="pb-title" colSpan = "3">Puppy Bowl Contestants</th>
                </tr>
            </thead>
            <tbody>

                
            
         

                <tr>
                
                    
                </tr>
                
                { filteredPuppies.map((pup) =>(
                     <PuppyRow key={pup.id} pup={pup} setSelectedPupId={setSelectedPupId} setPupInfo ={setPupInfo} 
                    onClick={() => handlePuppyClick(pup)} />
                ))}
                
                

                
            </tbody>
        </table>
        </div>
       
        </div>
        
    );
}
