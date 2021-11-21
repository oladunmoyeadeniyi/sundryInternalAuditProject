import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import ButtonField from '../../components/ButtonField'
import InputField from "../../components/InputField"

function SignInForm() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const username = (e) => {
        setUserName(e.target.value)
    };
    const passwordSet = (e) => {
        setPassword(e.target.value)
    };
    const login = (e) => {
        alert(`Username: ${userName} Password: ${password}`)
        // e.preventDefault()
        console.log("Form submitted");
    }
    useEffect(() => {
        document.title = "Sign In"
        window.scroll(0,0)
    }, [])
    return (
        <form onSubmit={login}>
            <InputField
                label = "Username"
                value = {userName}
                onChange = {username}
                placeholder = "Username"
            />

            <InputField
                label = "Password"
                value = {password}
                onChange = {passwordSet}
                type = "password"
                placeholder = "Password"
            />
            <ButtonField
                type='submit'
            >
                <Link to="">
                    Sign in
                </Link>
            </ButtonField>
        </form>
    )
}

export default SignInForm
