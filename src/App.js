import Login from './Login';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Main from './Main';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="login" element={<Login/>} />
        <Route path='main' element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
