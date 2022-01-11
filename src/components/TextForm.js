import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick=()=>{
        //console.log("Uppercase was Clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleUpClick2=()=>{
       // console.log("Lowercase was Clicked")
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnChange=(event)=>{
        //console.log("OnChange was Clicked")
        setText(event.target.value)
    }
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleUpClick2}>
            Convert to Lowercase
        </button>
        </div>
        </>
    )
}