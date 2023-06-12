import React from "react";


export default function PuppyRow({pup, setSelectedPupId}){
return(
    <div id="contain-row">
    <tr 
    onClick={() =>{
        setSelectedPupId(pup.id);
    }}

    > <div id = "the-Rows">
        <td>{pup.name}</td>
        <td>
            <img
             src = {pup.imageUrl}
             id = "puppy-image"
             />
            </td>
            <td># {pup.id}</td>
            </div>
    </tr>
    </div>
);
}

