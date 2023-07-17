
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Login from './Login';
import Weatherdata from './Weatherdata';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/weather' element={<Weatherdata />} />
      </Routes>
    </>
  );
}

export default App;
