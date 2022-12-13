import { Route, Routes } from 'react-router-dom';
import './App.css';
import './css/common.module.css';
import Start from './page/Start';
import Area from './page/Area';
import Date from './page/Date'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/area" element={<Area />} />
      <Route path="/date" element={<Date />} />
    </Routes>
  );
}

export default App; 
