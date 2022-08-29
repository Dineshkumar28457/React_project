import logo from './logo.svg';
import './App.css';
import {Menu} from './menu.js';
import { Home } from './home.js';
import { About } from './about.js';

function App() {
  return (
    <div className="App">
     <Menu/> 
     <Home/>
     <About/>
    </div>
  );
}

export default App;
