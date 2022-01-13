import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick=()=>{
        //console.log("Uppercase was Clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase! ","success")
    }
    const handleLoClick=()=>{
       // console.log("Lowercase was Clicked")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase! ","success")
    }
    const handleOnChange=(event)=>{
        //console.log("OnChange was Clicked")
        setText(event.target.value)
    }
    const handleClearClick=()=>{
        let newText = ""
        setText(newText)
        props.showAlert("Text cleared! ","success")
    }
    const handleCopyClick = () =>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard! ","success")
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Space! ","success")
    }
    const handleCapClick = () =>{
        const text1 = text.split(/[ ]+/);
        for (var i = 0; i < text1.length; i++) {
            text1[i] = text1[i].charAt(0).toUpperCase() + text1[i].slice(1).toLowerCase();
        }
        const newText = text1.join(" ");
        setText(newText)
        props.showAlert("Text has been Capitalized! ","success")
    }
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}> Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}> Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>    Remove Extra Space </button>
        <button className="btn btn-primary mx-1" onClick={handleCapClick}>Capitalized Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear Text </button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{(text.split(" ")).length} words and {text.length} Characters</p>
            <p>{0.008*(text.split(" ")).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
