import { Link, useNavigate } from "react-router-dom"
import InputField from "../Components/InputField"
import { useState } from "react"
import axios from "axios"


function Register() {

    const navigate = useNavigate();

    const [value, setValues] = useState({
        email: "",
        password : ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value)
        axios.post("http://localhost:8081/signup", value)
        .then(navigate("/"))
        .catch(err => console.log(err))
    }

    const handleInput = (e) => {
                console.log(value)
        setValues(prev => ({...prev, [e.target.name]:[e.target.value]}))
    }
    return (
        <div className = "d-flex bg-primary justify-content-center align-items-center">
            <div className = "bg-white">
                <h2>Register</h2>
                <form action = "" onSubmit={handleSubmit} className="mb-2">                    
                    <InputField label = "Email" type = "email" name = "email" placeholder = "Email address" handleChange={handleInput}></InputField>
                    <InputField label = "Password" type = "password" name = "password" placeholder = "Enter password" handleChange={handleInput}></InputField>
                    <InputField label = "Confirm Password" type = "password" name = "C_Password" placeholder = "Confirm password" handleChange={handleInput}></InputField>
                    <button className="btn btn-success w-100">Submit</button>
                </form>
                <p>You don't have an account yet?</p>
                <Link to ="/signin" className="btn btn-default border w-100 bg-light text-decoration-none">Login</Link>
            </div>
        </div>
    )
}

export default Register