import React, { useState } from 'react'

export default function TextForm({heading, mode, showAlert}) {
  const[text, setText] = useState(''); 


  const handleOnChange = (e)=>{
    setText(e.target.value);
    let btn = document.getElementsByClassName('btn');
  }

  const handleUpCase = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    showAlert('Converted to Uppercase!', 'success');
  }

  const handleLoCase = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    showAlert('Converted to Lowercase!', 'success');
  }

  const handleClear = () =>{
    setText("");
    showAlert('Text Cleared!', 'success');
  }
  
  const handleCopy = () =>{
    navigator.clipboard.writeText(text);
    showAlert('Text Copied!', 'success');
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert('Removed Extraspaces!', 'success');
  }

  return (
    <>
        <h2 style={{color: mode === 'warning'?'black':'white'}} className="mb-3 text-uppercase">{heading}</h2>
        <div className="mb-3">
            <textarea style={{color: mode==='warning'?'black':'white',backgroundColor:mode==='warning'?'white':'black'}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> 
        </div>
        <div className="my-3">
          <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleUpCase}>Uppercase Text</button>
          <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleLoCase}>Lowercase Text</button>
          <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleClear}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={handleExtraSpaces}>Remove Extraspaces</button>
        </div>
        <div className="container my-3" style={{color: mode === 'warning'?'black':'white'}}>
          <h2>Your Text Summary</h2>
          <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words {text.length} characters</p>
          <p>{ text.length > 1 ? 0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length : 0} Minutes Read</p>
          <h2>Text Preview</h2>
          <p>{text.length>0?text:"Enter text to preview here"}</p>
        </div>
    </>
  )
}
