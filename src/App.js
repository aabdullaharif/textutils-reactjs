import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('warning');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const handleMode = () =>{
    if ( mode === 'dark'){
      setMode('warning');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light Mode Enabled!", 'success');
      // document.title ="Light Mode";
    }else{
      setMode('dark');
      document.body.style.backgroundColor = '#000';
      showAlert("Dark Mode Enabled!", 'success');
      // document.title ="Dark Mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} handleMode={handleMode} />
        <Alert alert={alert} />
        <main className='container my-3'>
          <Routes>
            <Route path='/' element={<TextForm heading="Text Operations " showAlert={showAlert} mode={mode} />} />
            <Route path='/about' element={<About mode={mode}/>} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
