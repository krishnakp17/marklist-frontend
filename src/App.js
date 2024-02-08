import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddMark from './components/AddMark';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddMark/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
