import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;


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
                <h1><FaUser /> Register</h1>
                <p>Please create an account</p>
            </section>

            <section className='form'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input type='text' className='form-control' id='name' value={name} name='name' onChange={handleTextChange} placeholder='Enter your name' />
                    </div>
                    <div className='form-group'>
                        <input type='email' className='form-control' id='email' value={email} name='email' onChange={handleTextChange} placeholder='Enter your email' />
                    </div>
                    <div className='form-group'>
                        <input type='password' className='form-control' id='password' value={password} name='password' onChange={handleTextChange} placeholder='Enter your password' />
                    </div>
                    <div className='form-group'>
                        <input type='password' className='form-control' id='password2' value={password2} name='password2' onChange={handleTextChange} placeholder='Confirm your password' />
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>

        </>
    )
}

export default Register