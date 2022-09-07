import React, {useContext, useRef} from 'react'
import { useHistory } from 'react-router-dom';
import "./ContactUs.css";
import AuthContext from '../Store/auth-context';

const Login = () => {
    const fetchEmailRef = useRef();
    const fetchPasswordRef = useRef();
    const history = useHistory();

     const authCtx = useContext(AuthContext)

    const loginFormHandler = (e) => {
        e.preventDefault();
        const enteredEmail = fetchEmailRef.current.value;
        const enteredPassword = fetchPasswordRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBnHG0EOFEijaQqpMOcmLAmu8c7pqs0zao', {
            method: 'POST',
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true
          }),
          headers:{ 
            'Content-Type': 'application/json'
         }
          })
          .then( res => {
            if(res.ok) {
                localStorage.setItem('email', enteredEmail)
              res.json().then(data => {authCtx.login(data.idToken)
              history.replace('./home')}
              
              )
    
            } else {
              return res.json().then(data => {
                alert(data.error.message);
              });
            }
          }
          )

    }
  
  return (
   <form className="contact-form" onSubmit={loginFormHandler}>
    <h1>Enter Your Credentials👇</h1>
    <div>
        <label htmlFor="email">Email</label><br/>
        <input type='email' id='email' placeholder="Enter Your Email" ref={fetchEmailRef}/>
    </div>
    <div>
        <label htmlFor="password">Password</label><br/>
        <input type='password' id='password' placeholder="Enter Your Password" ref={fetchPasswordRef}/>
    </div>
    <button type='submit'>Submit</button>
    <div className='dummy-box'>
    <h3>Dummy Credentials</h3>
    <p>Email: <span>shubh410shekhar@gmail.com</span></p>
    <p>Password: <span>test123</span></p>
    </div>
   </form>
  );
};
export default Login;
