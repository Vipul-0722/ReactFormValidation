
import React, { useState } from 'react'
import './formInput.css'
const FormInput = (props) => {
  
    const {label,onChange,id,errorMessage, ...inputProps}=props;
   
   const [focused, setFocused]=useState(false);

   const handleBlur=()=>{
         setFocused(true);
   }
  return (
    <div className="form-input">
       <label>{label}</label>
       <input {...inputProps} onChange={onChange} onBlur={handleBlur} focused={focused.toString()}/>
       <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput