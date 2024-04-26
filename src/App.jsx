import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './Components/Navbar';
import Usersignup from './pages/Usersignup';
import Userlogin from './pages/Userlogin';
import Batterymodel from './pages/Batterymodels';
import Bikelist from './pages/Bikelist';
import Brand from './pages/Brand';
import Bat from './pages/Batterylist';
import Book from './pages/Bookpage';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Usersignup />} />
        <Route path="/login" element={<Userlogin />} />
        <Route path="/batterylist" element={<Batterymodel />} />
        <Route path="/bike/:id" element={<Bikelist />} />
        <Route path="/brandlist" element={<Brand />} />
        <Route path="/batlist/:id" element={<Bat />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </div>
  );
};
export default App;
