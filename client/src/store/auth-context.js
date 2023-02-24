
import React,{useState} from "react";

const AuthContext = React.createContext({
    
    token: '',
    email:'',
    isLoggedin: false, 
    login: (token) => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {

    const [token , setToken] = useState (null);
    const [email, setEmail] = useState(null);

    const userIsLoggin = !!token; 

    const loginHandler = (token,email) => {
        setToken (token);
        setEmail (email);
    }
    const logoutHandler = () => {
        setToken(null);
        setEmail(null);
    }

    const contextValue = {
        token: token, 
        email: email,
        isLoggedin: userIsLoggin, 
        login: loginHandler,
        logout: logoutHandler 
    };


    return <AuthContext.Provider value = {contextValue}>
        {props.children}
    </AuthContext.Provider> 

}

export default AuthContext;


