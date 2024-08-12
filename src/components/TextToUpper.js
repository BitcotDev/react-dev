import React, { useState } from 'react'

export default function TextToUpper(props) {
    const handleOnUpper = () => {
        let UpperText = Upper.toUpperCase();
        setUpper(UpperText);
    }
    const handleOnLower = () => {
        let LowerText = Upper.toLowerCase();
        setUpper(LowerText);
    }
    const handleOnChange = (e) => {
        setUpper(e.target.value);
    }

    const [Upper, setUpper] = useState('Enter');
    return (
        <>
            <div className="container">
                <div className="form-floating my-3 mb-3">
                    <h1>{props.heading}</h1>
                    <textarea id="textUpper" value={Upper} onChange={handleOnChange} name="textUpper" rows="8" cols="100" />
                </div>
                <button type="button" onClick={handleOnUpper} className="btn btn-primary mx-1">Text to UpperCase</button>
                <button type="button" onClick={handleOnLower} className="btn btn-primary mx-2">Text to UpperCase</button>
            </div>
            <div className='container my-3'>
                <h2>Word Counter</h2>
                Total Characters : {Upper.length}
                <br />
                Total Words : {Upper.split(" ").length}
            </div>
            <div className='container my-3'>
                <h2>Text Preview</h2>
                {Upper}
            </div>
        </>
    )
}
