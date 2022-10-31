import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Downbar from './Component/Downbar';
import Home from './Component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,

} from 'react-router-dom'
import Form from './Component/Form';
import Mocktest from './Component/Mocktest';
function App() {


  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='/testform' element={<Form />} ></Route>
          <Route exact path='/mocktest' element={<Mocktest/>}></Route>
        </Routes>
        {/* <Downbar/> */}
      </div>
    </Router>
  );
}

export default App;
