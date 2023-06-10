import React from "react";
import { useState,useEffect } from "react";
import PuppyRow from "./PuppyRow";



export default function PuppyList({setSelectedPupId}){
    const[pupInfo, setPupInfo] = useState([]);
   
 //test
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
//test code


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
        <label htmlFor="search-query">Search By Name Here: </label>
        <input
          name="search-query"
          type="text"
          placeholder="Type here"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </form>



        <table>
            <thead>
                <tr>
                    <th colSpan = "3">Puppy Bowl Contestants</th>
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
        
    );
}
