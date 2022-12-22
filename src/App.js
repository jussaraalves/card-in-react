import './App.css';
import BackgroundControls from './components/BackgroundControls/BackgroundControls';
import InfoCard from './components/Card/InfoCard';

function App() {
  return (
    <div className='app'>
      <InfoCard/>
      <BackgroundControls/>
    </div>
  );
}

export default App;
