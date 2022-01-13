
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
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

  const toggleMode = ()=>{
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
            <About />
          </Route>
          <Route exact path="/">
  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
  </Route>
  </Switch>
</div>
</Router>
    </>
  );
}

export default App;
