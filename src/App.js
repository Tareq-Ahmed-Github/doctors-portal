import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About';
import Appointment from './Components/Pages/Appointment/Appointment';
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/appointment' element={<Appointment/>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
