import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";

function App() {


  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/notes" element={<Notes/>}/>
          <Route path="/create" element={<Create/>}/>
        </Routes>
    </Router>
    
 
  );
}

export default App;
