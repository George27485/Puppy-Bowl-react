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
              <table>
                <tbody>

                <tr>
                  <td>
            <img
             src = {pupInfo.imageUrl}
             id = "puppy-image"
             />
            </td>
            </tr>
                  <tr>
                    <td>Name:</td>
                    <td>{pupInfo.name}</td>
                  </tr>
                 <tr>
                    <td>ID:</td>
                    <td>{pupInfo.id}</td>
                 </tr>
                  <tr>
                    <td>Breed:</td>
                    <td>{pupInfo.breed}</td>
                  </tr>
                  <tr>
                    <td>Status:</td>
                    <td>{pupInfo.status}</td>
                  </tr>
                  <tr>
                    <td>Cohort</td>
                    <td>{pupInfo.cohort}</td>
                  </tr>
                </tbody>
              </table>
              <button onClick={() => setSelectedPupId(null)}>Go Back</button>
            </div>
          ) : null}
        </div>
      );
    }
    
