import { Route, Routes } from 'react-router-dom';
import './App.css';
import './css/common.module.css';
import Start from './page/Start';
import Area from './page/Area';
import Schedule from './page/Schedule';
import Planner from './page/Planner';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/area" element={<Area />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/planner" element={<Planner />} />
    </Routes>
  );
}

export default App; 
