// import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading/Heading';
import BandList from './components/BandList/BandList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
      </header>
      <BandList />
    </div>
  );
}

export default App;
