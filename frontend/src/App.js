

import './App.css';
import {Routes,Route} from "react-router-dom"
import SignupCard from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import ImagesBreed from './pages/Breed';

function App() {
  return (
    <div className="App">
      <Navbar/>
           <Routes>
        <Route path={"/"} element={<SignupCard/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/puppy"} element={<ImagesBreed/>}/>

        <Route path={"/Home"} element={<Home/>}/>
     </Routes>
      
    </div>
  );
}

export default App;
