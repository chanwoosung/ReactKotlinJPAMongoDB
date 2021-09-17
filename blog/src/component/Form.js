import React from "react";
import "./Form.css";

const Form =({value, onChange, onCreate, onKeyPress})=>{
    return(
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="createButton" onClick={onCreate}>추가버튼</div>
        </div>

    );
}

export default Form;
