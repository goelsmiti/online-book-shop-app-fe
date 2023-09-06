// src/components/LoginForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'
export default function LoginForm() {
    useEffect(() => {
        // localStorage.clear()
        (async () => {
            const response = await axios.get('http://localhost:4000/product/getallproducts',
                // {
                //     headers: {
                //         'x-access-token': localStorage.getItem('token'),
                //     }
                // }
            );
            console.log("product response::::", response);
            localStorage.setItem("products", JSON.stringify(response.data))
        })()
    }, [])

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/user/login', { username, password });
            console.log("login response:::", response);
            if (response.data.token) {
                if (response.data.user.status == 'exist') {
                    localStorage.setItem('token', response.data.token)
                    const userDetails = {
                        name: response.data.user.name,
                        username: response.data.user.username
                    }
                    localStorage.setItem('userDetails', JSON.stringify(userDetails))
                    navigate('/dashboard')

                } else {
                    navigate('/signup')
                }
            } else {
                alert('Please check the login details !')
            }
            console.log(response.data);
            // Save token to localStorage or state for further authenticated requests
        } catch (error) {
            console.error('Login error:', error);
        }
        console.log("Hi user::", username, password);
    };

    return (
        <div className='login_div'>
            <h2 style={{ fontSize: 20, textAlign: "center" }}>Login Form</h2>
            <hr></hr>
            <form style={{ marginTop: 20 }} onSubmit={handleSubmit}>
                <label>Username</label>
                <input className='input_fields'
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input className='input_fields'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='submit_button' type="submit">Login</button>
            </form>
            <br />
            <h3>Not Registered?</h3>
            <Link to='/signup'>Sign Up</Link>
        </div>

    );
}