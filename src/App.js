import logo from './logo.svg';
import log from './Neha.jpeg';
import './App.css';
import { nativeTouchData } from 'react-dom/test-utils';
let name = "Neha"
function App() {
  return (
    <>
   <nav>
     <li>Home</li>
     <li>About</li>
     <li>Contact</li>
     </nav> 
     <div className="container">
       <h1>Hello {name}</h1>
       <img src={log}/>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet unde molestias veritatis tempora consequatur est quos commodi adipisci laudantium dolores minus, nemo assumenda saepe? Molestias rerum qui deserunt ea, ipsam ratione veritatis dolores modi!</p>
     </div>
    </>
  );
}

export default App;
