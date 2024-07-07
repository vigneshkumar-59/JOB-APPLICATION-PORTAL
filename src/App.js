import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home1 from './Pages/Home1';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Company from './Pages/company';
import Wipro from './Pages/Wipro';
import EntioviTech from './Pages/EntioviTech';
import TCS from './Pages/TCS';
import Infosys from './Pages/Infosys';
import Infovision from './Pages/Infovision';
import TechMahindra from './Pages/TechMahindra';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Home1" element={<Home1/>} />
      <Route path="/Company" element={<Company/>} />
      <Route path="/Wipro" element={<Wipro/>} />
      <Route path="/EntioviTech" element={<EntioviTech/>} />
      <Route path="/TCS" element={<TCS/>} />
      <Route path="/Infosys" element={<Infosys/>} />
      <Route path="/Infovision" element={<Infovision/>} />
      <Route path="/TechMahindra" element={<TechMahindra/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
