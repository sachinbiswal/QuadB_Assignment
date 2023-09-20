import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const existingUser = localStorage.getItem("email");

        if (existingUser===email) {
            alert("User already exists. Please log in or use a different email.");
        } else {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', pass);

           alert('Registration Successful');
            navigate('/login');
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Your Full Name" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <button type="submit">Sign Up</button>
            </form>
            <button className="link-btn" onClick={() => navigate("/login")}>
                Already have an account? Login here.
            </button>
        </div>
    )
}
