import { useState, useEffect } from 'react'
import PuppyList from './components/PuppyList'
import './App.css'
import SelectedPuppy from './components/selectedPuppy';
import PuppyForm from './components/PuppyForm';
import DeleteForm from './components/DeleteForm';
import '/public/images/pbr.jpg';
import '/public/images/pbrc.jpg';


function App() {
  const [selectedPuppyId, setSelectedPupId]= useState(null);
  const [pupInfo, setPupInfo] = useState([])
//test






//end of test

  

  
  return(
    
    <>
    {selectedPuppyId ? (
      <SelectedPuppy selectedPuppyId={selectedPuppyId} setSelectedPupId={setSelectedPupId}/>
    ):(
      <>
     
    <PuppyList setSelectedPupId={setSelectedPupId}/>
    <PuppyForm setPupInfo={setPupInfo} pupInfo={pupInfo}/>
    <DeleteForm setPupInfo={setPupInfo} />
    
    </>
    )}
    </>
  );
}

 
export default App
