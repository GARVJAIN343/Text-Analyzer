import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,settext]=useState("");

    const HandleUpClick=()=>{
        let newText = text.toUpperCase();
        settext(newText);
    }
    const HandleLoClick=()=>{
        let newText = text.toLowerCase();
        settext(newText);
    }
    const HandleClearClick=()=>{
        let newText = "";
        settext(newText);
    }
    const HandleOnChange=(event)=>{
        settext(event.target.value);
    }

    const [mystyle,setMyStyle]=useState({
        color:'black',
        backgroundColor: 'white'
    })
    const [btntext,setBtnText]=useState("Enable Dark Mode")
    const toggleStyle=()=>{
        if(mystyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor:'black'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
    return (
        <>
    <div className='container' style={mystyle}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={HandleOnChange} id="myBox" rows="8" style={mystyle}></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={HandleUpClick} >Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={HandleLoClick} >Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={HandleClearClick} >Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={toggleStyle}>{btntext}</button>

    </div>
    <div className='container my-3 'style={mystyle}>
        <h1>Your Text Summary</h1> 
        <h6>{text.split(" ").length} Words and {text.length} Characters</h6>
        <h2>Preview</h2>
        <h6>{text}</h6>
    </div>
    </>
  )
}
