import React, { useState } from 'react'
import PropTypes from 'prop-types'
import copy from '../copy.png';

export default function TextForm(props) {
    const textUpper = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to UpperCase','success')
    }
    const textLower = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to LowerCase','success')
    }
    const ClearText = () => {
        let newText = ""
        setText(newText)
    }
    const copyText = () => {
        var text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
    }
    const TextOnChange = (e) => {
        setText(e.target.value)
    }
    const remExSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    function RemPunc() {
        let newText = text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
        setText(newText)
    }
    const [text, setText] = useState('')
    let mystyle = {
        backgroundColor: props.mode === 'light' ? 'rgba(248,249,250)' : 'rgb(43 45 48)',
        color: props.mode === 'light' ? 'black' : 'white',
    }

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div id="rel" className="mb-3">
                    <button id="copy" style={{filter: props.mode==='light'?`invert(0)`:`invert(1)`}} className='btn mx-3 my-3' onClick={copyText}><img src={copy} alt="" /></button>
                    <textarea className="form-control" style={mystyle} value={text} onChange={TextOnChange} id="myBox" rows="8" placeholder='Enter Your Text Here'>
                    </textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={textUpper} >Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={textLower} >Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={ClearText} >Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={RemPunc} >Remove Punctuations</button>
                <button className="btn btn-primary mx-2" onClick={remExSpaces} >Remove Extra Spaces</button>
            </div>
            <div className="container">
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}
TextForm.defaultProps = {
    heading: "Enter your text here"

}