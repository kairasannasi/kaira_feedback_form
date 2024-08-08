
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Thnx from './components/home/Thnx';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/thanku' element={<Thnx /> } />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
