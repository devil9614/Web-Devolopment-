import { useState, useEffect} from 'react';
import './App.css';
import NoodleData from './data/noodleData.json';
import Images from './data/image.json';
import NoodleCard from './NoodleCard';
// import { ReactComponent } from '*.svg';

function App() {
  
  const [noodle,SetNoodle] = useState("");
  console.log(NoodleData);

  const renderCard = NoodleData.map(noodless => {
    return <NoodleCard brand = {noodless.Brand}/>
  })

  return (
    <div className="App">
      {renderCard}
    </div>
  );
}

export default App;
