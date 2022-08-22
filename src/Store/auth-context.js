import React, {useState} from 'react';
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {}
})

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)

    const userIsLooggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token)
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLooggedIn,
        login: loginHandler
    }


    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext