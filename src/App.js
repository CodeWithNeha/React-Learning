
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './About';
import React,{useState} from 'react';
let name = "Neha"
function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.background = "#042743";
    }
    else{
      setMode('light')
      document.body.style.background = "white";
    }
  }
  return (
    <>
    {/* <Navbar />
    <Navbar title= "TextUtils"  aboutText="About us"/> */}
<Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
<TextForm heading="Enter the text to analyze below" mode={mode} />
{/* <About></About> */}
</div>

    </>
  );
}

export default App;
