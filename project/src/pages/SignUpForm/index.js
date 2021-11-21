import React from 'react'
import { Link } from 'react-router-dom'
import ButtonField from '../../components/ButtonField'
import InputField from '../../components/InputField'
import useFormState from "../../customhook/useFormState"
import Validation from '../../customhook/Validation'

const SignUpForm = (submitForm) => {
    // Destructuring the function and methods imported from the custom hoot "useFormState"
    const {values, errors, handleChange, handleSubmit, isSubmitting} 
    = useFormState(
        Validation, 
        submitForm
    );
    isSubmitting ? console.log(isSubmitting) : console.log("Is not submitting");
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <InputField
                    id="username"
                    label="Username"
                    name="username"
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={handleChange}
                />
                {errors && <p>{errors.username}</p>}
                <InputField
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors && <p>{errors.email}</p>}
                <InputField
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors && <p>{errors.password}</p>}
                <InputField
                    id="password2"
                    label="Confirm Password"
                    name="password2"
                    type="password"
                    placeholder="Confirm your password"
                    value={values.password2}
                    onChange={handleChange}
                />
                {errors && <p>{errors.password2}</p>}
                <ButtonField
                    type="submit"
                    btn_text="Sign Up"
                    // disabled={errors && true}
                />
                <div>
                    <span>Already have an account?</span>
                    <Link to="/signIn">Sign In</Link>
                </div>

            </form>
        </div>
    )
}

export default SignUpForm
