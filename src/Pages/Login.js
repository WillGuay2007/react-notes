import { Link } from "react-router-dom"
import InputField from "../Components/InputField"
import { useState } from "react"
import axios from "axios"

function Login() {

    const [value, setValues] = useState({
        email: "",
        password : ""
    })

    const handleSubmit = (e) => {
        e.preventdefault()
        axios.post("https//localhost:8081/signup", value)
    }

    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]:[e.target.value]}))
    }
    
    return (
        <div className = "d-flex bg-primary justify-content-center align-items-center">
            <div className = "bg-white">
                <h2>Sign in</h2>
                <form action = "" onSubmit={handleSubmit} className="mb-2">
                    <InputField label = "Email" type = "Email" name = "Email" placeholder = "Email address" handleChange={handleInput}></InputField>
                    <InputField label = "Password" type = "Password" name = "Password" placeholder = "Password"></InputField>

                    <button className="btn btn-success w-100">Submit</button>
                </form>
                <p>Sign in</p>
                <Link to ="/signup" className="btn btn-default border w-100 bg-light text-decoration-none">Register</Link>
            </div>
        </div>
    )
}

export default Login