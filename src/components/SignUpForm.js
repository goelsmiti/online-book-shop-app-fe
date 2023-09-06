import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUpForm() {
    const [name, setName] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        try {
            if (name && username && password) {
                const response = await axios.post('http://localhost:4000/user/signup',
                    { name, username, password });
                console.log("signup responsee", response.data);
                if (response.data) {
                    if (response.data.status == 'exist') {
                        alert("User already exists!");
                    } else {
                        alert('User created successfully');
                        navigate('/login')

                    }
                }
            } else {
                alert("Please fill all the details")
            }

            // Save token to localStorage or state for further authenticated requests
        } catch (error) {
            console.error('Login error:', error);
        }
        console.log("Hi sign up userrrrr::", name, username, password);
    };

    return (
        <div className='login_div'>
            <h2 style={{ fontSize: 20, textAlign: "center" }}>Register Here </h2>
            <hr></hr>
            <form onSubmit={handleSignUpSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input className="form-control"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Useename:</label>
                    <input className="form-control"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input className="form-control"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button className='submit_button' type="submit">Sign Up</button>
                </div>
            </form >
            <br />
            <h3>OR Already Registered?</h3>
            <Link to='/'>Login</Link>
        </div >
    );
}