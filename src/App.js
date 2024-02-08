import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddMark from './components/AddMark';
import ViewMark from './components/ViewMark';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddMark/>}/>
        <Route path='/view' element={<ViewMark/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
