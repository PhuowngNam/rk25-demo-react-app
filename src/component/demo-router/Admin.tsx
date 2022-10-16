import React from 'react';
import {LoginContext} from '../../context/LoginContext';
import {useNavigate} from "react-router-dom";

function Admin() {
    const navigate = useNavigate();

    return (
        <LoginContext.Consumer>
            {
                loginContext => {
                    const clickGoToLogin = () => {
                        navigate("/login")
                    }
                    const clickLogout = () => {
                        loginContext.setIsLogin(false);
                    }
                    return (
                        <>
                            {loginContext.isLogin && (
                                <div>
                                    <h1>
                                        Welcome admin!
                                    </h1>
                                    <button style={{marginTop: '10px'}} onClick={clickLogout}>Logout</button>
                                </div>
                            )}
                            {!loginContext.isLogin && (
                                <div style={{marginTop: '10px'}}>
                                    <div style={{marginBottom: '10px'}}>
                                        You must log in to view the page at /admin
                                    </div>
                                    <button onClick={clickGoToLogin}>
                                        Go to Login
                                    </button>
                                </div>
                            )}
                        </>
                    )
                }
            }
        </LoginContext.Consumer>
    );
}

export default Admin;