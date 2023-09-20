import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
        if (email === storedEmail && password === storedPassword && email!==''&& password!=='') {
            sessionStorage.setItem("email", email);
            navigate("/landing");
        } else {
            alert('Enter proper credentials.');
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                />
                
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                />
                <button type="submit">Log In</button>

            </form>
            <button className="link-btn" onClick={() => navigate("/register")}>
                Don't have an account? Register here.
            </button>
        </div>
    )
}
