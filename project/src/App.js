// import {useState} from "react"
import './App.css';
import Landing from "./pages/Landing"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';

function App() {
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // function submitForm() {
  //   setIsSubmitted(true);
  // }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} exact/>
        <Route path="/signIn" element={<SignInForm/>} />
        <Route path="/signUp" element={<SignUpForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
