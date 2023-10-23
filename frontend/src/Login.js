import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Signup from './Signup';
import LoginValidation from './LoginValidation';
import home from './home';
import axios from 'axios';


function Login(){

    const [values, setValues] = useState({
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
        setErrors(LoginValidation(values))
        if(errors.email==="" && errors.password===""){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success"){
                navigate('/home');
                }
                else{
                    alert("No record exists of the specified user")
                }
            })
            .catch(err => console.log(err));
        }
    } 
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login Page</h2>
                <form action = "" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input onChange={handleInput} type='email' placeholder='Enter Email' name='email'  className='form-control'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input onChange={handleInput} type='password' placeholder='Enter Password' name='password'  className='form-control'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type="submit" className='btn btn-success w-100'>Log in</button>
                    <p>You agree to our terms and policies</p>
                    <Link to="/Signup" className='btn btn-default border w-100'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;