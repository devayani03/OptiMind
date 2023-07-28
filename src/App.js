
import './App.css';
import { ReactDOM } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home';
function App() {
  return (
    <div className="App">
      <Router>
				<Navbar />
        <Routes>
					<Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
