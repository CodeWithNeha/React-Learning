import logo from './logo.svg';
import log from './Neha.jpeg';
import './App.css';
import { nativeTouchData } from 'react-dom/test-utils';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
let name = "Neha"
function App() {
  return (
    <>
    {/* <Navbar />
    <Navbar title= "TextUtils"  aboutText="About us"/> */}
<Navbar title= "TextUtils"/>
<div className="container my-3">
<TextForm heading="Enter the text to analyze below"/>
</div>

    </>
  );
}

export default App;
