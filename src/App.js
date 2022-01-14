
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setalert] = useState(null)
  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type 
    })
    setTimeout(()=>{
      setalert(null)
    },(1500))
  } 
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')

  }
  const toggleMode = (cls)=>{
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if(mode ==='light'){
     
      setMode('dark')
      document.body.style.background = "#042743";
      showAlert("Dark mode has been enabled","success")
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.background = "white";
      showAlert("Light mode has been enabled","success")
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar />
    <Navbar title= "TextUtils"  aboutText="About us"/> */}
 <Router>
<Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}></Alert>
<div className="container my-3">
<Switch>
          <Route exact path="/about">
            <About mode = {mode} />
          </Route>
          <Route exact path="/">
  <TextForm showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />
  </Route>
  </Switch>
</div>
</Router>
    </>
  );
}

export default App;
