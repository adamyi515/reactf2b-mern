import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { FaSign, FaSignInAlt } from 'react-icons/fa';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;


    /////////////////////////////////////////////////////////////////////////////////////////
    // Event Handlers
    const handleTextChange = ev => {
        setFormData(prevState => {
            return {
                ...prevState,
                [ev.target.name]: ev.target.value
            }
        })
    }

    const handleSubmit = ev => {
        ev.preventDefault();


    }


    return (
        <>
            <section className='heading'>
                <h1><FaSignInAlt /> Login</h1>
                <p>Please log in to get support</p>
            </section>

            <section className='form'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input type='email' className='form-control' id='email' value={email} name='email' onChange={handleTextChange} placeholder='Enter your email' required />
                    </div>
                    <div className='form-group'>
                        <input type='password' className='form-control' id='password' value={password} name='password' onChange={handleTextChange} placeholder='Enter your password' required />
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>

        </>
    )
}

export default Login