import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,settext]=useState("");

    const HandleUpClick=()=>{
        let newText = text.toUpperCase();
        settext(newText);
    }
    const HandleOnChange=(event)=>{
        settext(event.target.value);
    }
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={HandleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={HandleUpClick} >Convert to Uppercase</button>
    </div>
  )
}
