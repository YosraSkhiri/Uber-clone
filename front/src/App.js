import { BrowserRouter as Router } from "react-router-dom";
import './assets/style/sass/style.scss';
import Navbar from './components/Navbar';
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
      </div>
    </Router>
  );
}

export default App;
