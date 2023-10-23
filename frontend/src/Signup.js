import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SignupValidation from "./SignupValidation";
import axios from 'axios'

function Signup(){

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleInput = (Event) =>{
        setValues(prev => ({...prev,[Event.target.name]:[Event.target.value]}))
    }
    const navigate = useNavigate()

    const handleSubmit = (Event) =>{
        Event.preventDefault();
        setErrors(SignupValidation(values))
        if(errors.name==="" && errors.email==="" && errors.password===""){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    } 

    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign Up Page</h2>
                <form action = "" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input onChange={handleInput} type='text' placeholder='Enter your Name' name="name" className='form-control'/>
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input onChange={handleInput} type='email' placeholder='Enter Email' name="email" className='form-control'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input onChange={handleInput} type='password' placeholder='Enter Password' name="password" className='form-control'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type="submit" className='btn btn-success w-100'>Sign Up</button>
                    <p>You agree to our terms and policies</p>
                    <Link to="/" className='btn btn-default border w-100'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;