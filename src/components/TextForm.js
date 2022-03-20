import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,settext]=useState("");

    const HandleUpClick=()=>{
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Converted To UpperCase!","success");
    }
    const HandleLoClick=()=>{
        let newText = text.toLowerCase();
        settext(newText);
        props.showAlert("Converted To LowerCase!","success");
    }
    const HandleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is Copied to Clipboard","success");
    }

    const HandleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        settext(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
    }    
    const HandleClearClick=()=>{
        let newText = "";
        settext(newText);
        props.showAlert("Text Cleared","success");
    }
    const HandleOnChange=(event)=>{
        settext(event.target.value);
        
    }
    return (
        <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={HandleOnChange} style={{backgroundColor: props.mode==='dark'?'#273d4a':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" ></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={HandleUpClick} >Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={HandleLoClick} >Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={HandleClearClick} >Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={HandleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1' onClick={HandleExtraSpace}>Remove Extra Space</button>

    </div>
    <div className='container my-3 ' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1> 
        <h6>{text.split(" ").length} Words and {text.length} Characters</h6>
        <h2>Preview</h2>
        <h6>{text.length>0?text:"Enter Something In the TextBox Above To Preview It Here"}</h6>
    </div>
    </>
  )
}
