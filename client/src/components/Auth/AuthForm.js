import { useState , useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router-dom';
import classes from './AuthForm.module.css';

const AuthForm = () => {

  const emailInputRef = useRef();
  const passwordInputRef = useRef(); 
  const history = useNavigate();
  const authCtx = useContext (AuthContext); 
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
const submitHandler = (event) =>{
  event.preventDefault();

const enteredEmail = emailInputRef.current.value;
const enteredPassword = passwordInputRef.current.value;

// optional add validation 

setIsLoading(true);

let url ; 
let mongoUrl;

if ( isLogin){

  url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDOvXq71xqny8GmJ9Rdd4tqh1PPDX5xc6Q';

}else{

  url =  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDOvXq71xqny8GmJ9Rdd4tqh1PPDX5xc6Q' ; 
  mongoUrl ='http://localhost:4000/api/users';
 
}
fetch (url ,
  {
    method: 'POST',
    body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
    }),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then ( res => {
    setIsLoading(false);
    if(res.ok) {
     return res.json();
    }else{
      return res.json ().then((data) => {
       let errorMessage = 'Auth failed';
    
       throw new Error( errorMessage);
      });
    }
  }).then( (data) => {
    console.log(data);
    authCtx.login (data.idToken, data.email);
    history('/');
  }).catch (err => {
    alert (err.message);
  });

  fetch(mongoUrl, {
    method: 'POST',
    body: JSON.stringify({
        email: enteredEmail,
    }),
    headers:{
      'Content-Type': 'application/json'
    }}).then ( res => {
      setIsLoading(false);
      if(res.ok) {
       return res.json();
      }else{
        return res.json ().then((data) => {
         let errorMessage = 'Auth failed';
      
         throw new Error( errorMessage);
        });
      }
    });
}

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Cotumer Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' required ref = {emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password'  minLength = "7" required ref = {passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {
            isLoading && <p> Loading ... </p>
          }
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
