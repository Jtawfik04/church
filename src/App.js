import logo from './logo.svg';
import './App.css';
import CopticCalendar from './Components/Calendar.js';
import TestCard from './Components/TestCard.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestCard/>
        <CopticCalendar/>
      </header>
    </div>
  );
}

export default App;
