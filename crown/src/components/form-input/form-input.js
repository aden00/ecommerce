
import React from "react";
import './form-input.scss'
const FormInput = ({handleChange,label,...other}) => (
    <div className="group">
        <input type="text" className="form-input" onChange={handleChange} {...other}/>
        {
            label?
            (<label className={`${other.value.length?'shrink':''} form-input-label`}>
                {label}
            </label>)
            :null
        }
    </div>
)

export default FormInput;
