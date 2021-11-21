// The input value state is destructured in as props
export default function Validation(values) {
    let errors = {};

    // Username validation
    if(!values.username.trim()) {
        errors.username = "Username required"
    };

    // Email validation
    if(!values.email.trim()) {
        errors.email = "Email required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email Address is invalid"
    };

    // Password validation
    if(!values.password) {
        errors.password = "Password is required"
    }else if(values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more"
    }

    // Password confirmation
    if(!values.password2) {
        errors.password2 = "Password is required"
    }else if(values.password2 !== values.password) {
        errors.password2 = "Password do not match"
    }

    

    // Return errors
    return errors;

}