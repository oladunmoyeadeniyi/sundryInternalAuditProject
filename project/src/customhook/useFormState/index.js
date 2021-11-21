import {useState} from "react"
import Validation from "../Validation";
const useFormState = (validation) => {

    // State of the input elements
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
    });

    // State of the error message that would be displayed
    const [errors, setErrors] = useState({});

    //Form submittion state
    const [isSubmitting, setIsSubmitting] = useState(false);

    //Event handler for input element onChange event
    const handleChange = (e) => {
        const {name,value} = e.target;
        setValues({...values, [name]:value})
    };
    // Local St0rage
    function localStorages(){
        let username = values.username.toLowerCase();
        let email = values.email.toLowerCase();
        let password = values.password;
        const newUser = {
            username,
            email,
            password
        };
        let users;
        if(localStorage.getItem('users') === null) {
          users = [];
        } else {
          users = JSON.parse(localStorage.getItem('users'));
        };

        users.push(newUser);
      
        localStorage.setItem('users', JSON.stringify(users));
      
        alert(`Welcome ${values.username}`);
      
      };

    // Event handler for the form submittiom
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(Validation(values))
        setIsSubmitting(true)
        localStorages()

        const users = JSON.parse(localStorage.getItem('users'));
       
        users.forEach(function(newUser){
          console.log(users[0].email);
        });
        // let u = []
        for(let i = 0; i < users.length; i++) {
            values.username.toLowerCase().trim() !== users[i].username ?
            users.splice(users[i]) 
            :
            console.log(values.username.toLowerCase().trim());
        };
        console.log(users);
    };
    console.log(`${isSubmitting} fron SignUpForm`);
    // Function and methods that would be consumed by the consuming components has to be returned
    return {handleChange, handleSubmit, values, errors, isSubmitting};
};
export default useFormState;