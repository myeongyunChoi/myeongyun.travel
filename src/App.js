import { Route, Routes } from 'react-router-dom';
import './App.css';
import './css/common.module.css';
import Start from './page/Start';
import Area from './page/Area';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/area" element={<Area />} />
    </Routes>
  );
}

export default App; 
