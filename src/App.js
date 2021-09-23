import './App.css';
import Home from './pages/Home';
import Liked from './pages/Liked';
import {Route, BrowserRouter as Router} from "react-router-dom"
import NavBar from "./components/NavBar"

function App() {
  return (
    <Router>
      <NavBar/>

      <Route path="/" exact component={Home}/>
      <Route path="/liked" exact component={Liked}/>
    </Router>
  );
}

export default App;
