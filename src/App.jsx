import React, { useState } from "react";
import './App.css';
import Input from '../src/components/formInput'
const App = () => {
  
    const [values,setValues]=useState({
        username:'',
        email:'',
        password:'',
    }) 

    const inputs=[
      {
        id :1,
        name:"username",
        errorMessage:"Username is invalid it should be in between 3-16 character and should'nt include special character ",
        type:'text',
        placeholder:'Username',
         required:true,
         pattern:"^[A-Za-z0-9]{3,16}$",
         label:'Username'
      },

      {
         id :2,
         name:"email",
         type:'email',
         errorMessage:'It should be valid email Address',
         placeholder:'email',
         required:true,
         label:'email'
      },
      {
        id :3,
        name:"password",
        type:'text',
        errorMessage:"Password should 8-16 character long and include atleast 1 number,1 special character",
        placeholder:'Password',
        required:true,
        pattern:'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$',
        label:'Password'

      },
    ]

    //  const userNameRef=useRef();
    //  const emailRef=useRef();
    //  const passwordRef=useRef();
      
     const handleChange=(e)=>{
         e.preventDefault();
         setValues({...values,[e.target.name]:e.target.value})
     }
     
     console.log(values);
     const HandleSubmit=(e)=>{
        e.preventDefault();   // avoid refresing the page 
          const data=new FormData(e.target);
          console.log(Object.fromEntries(data.entries()))
     } 
     return(
      <div className='app'>
        <form className='form' onSubmit={HandleSubmit}>
        <h1>Register</h1>
        {inputs.map((input)=>(
            <Input 
               key={input.id}
               {...input}  
               value={values[input.name]}
               onChange={handleChange}  
               />
        ))}
       
          <button>Submit</button>
        </form>
         
      </div>
    )
}
export default App;
