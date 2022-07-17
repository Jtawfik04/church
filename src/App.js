import logo from './logo.svg';
import './App.css';
import CopticCalendar from './Components/Calendar.js';
import Holidays from './Components/Holidays.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Holidays/>
        <CopticCalendar/>
      </header>
    </div>
  );
}

export default App;
