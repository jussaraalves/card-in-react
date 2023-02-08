import { useState } from 'react';
import './App.css';
import BackgroundControls from './components/BackgroundControls/BackgroundControls';
import InfoCard from './components/Card/InfoCard';

function App() {
  const [bgColor, setBgColor] = useState();

  return (
    <div className='app'>
      <InfoCard bgColor={bgColor}/>
      <BackgroundControls setBgColor={setBgColor}/>
    </div>
  );
}

export default App;
