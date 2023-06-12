import {useState, useEffect} from "react";

export default function SelectedPuppy({selectedPuppyId, setSelectedPupId}){
    const [pupInfo,setPupInfo]= useState({});

   
    useEffect(() => {
        async function fetchPup(){
            try{
                const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players/${selectedPuppyId}`);
                const data = await response.json();
                const player = data.data.player;
                setPupInfo(player);
            } catch(error){
                console.log(error);
            }
        }
        if (selectedPuppyId){
            fetchPup();
        }
    }, [selectedPuppyId])

    

    

    return (
        <div>
          {pupInfo ? (
            <div>
              <h2>Puppy Details</h2>
              <table id= "selected-pup">
                <tbody>

                <tr>
                  <td>
            <img
             src = {pupInfo.imageUrl}
             id = "puppy-image2"
             />
            </td>
            </tr>
            

                  <tr>
                    <td>Name:   {pupInfo.name}</td>
                  </tr>
                 <tr>
                    <td>ID:   {pupInfo.id}</td>
                 </tr>
                  <tr>
                    <td>Breed:   {pupInfo.breed}</td>
                    
                  </tr>
                  <tr>
                    <td>Status:   {pupInfo.status}</td>
                  </tr>
                 
                </tbody>
              </table>
              <button onClick={() => setSelectedPupId(null)}>Go Back</button>
            </div>
          ) : null}
          
        </div>
      );
    }
    
