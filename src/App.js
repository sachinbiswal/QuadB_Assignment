import React, { useState } from "react";
import './App.css';
import { Login } from "./Components/Login";
import { Register } from "./Components/Signup";
import LandingPage from "./Components/LandingPage";
import { Route, Routes, Navigate } from "react-router-dom"; 
import JobDetail from "./Components/JobDetails";
import ApplicationForm from "./Components/ApplicationForm";
import SuccessPage from "./Components/SuccessPage";

function App() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
                <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/job/:id" element={<JobDetail />} />
                <Route path="/apply" element={<ApplicationForm />} /> 
                <Route path="/success" element={<SuccessPage />} />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </div>
    );
}

export default App;
