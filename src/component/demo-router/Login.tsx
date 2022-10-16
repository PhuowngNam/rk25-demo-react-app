import React from 'react';
import {LoginContext} from "../../context/LoginContext";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <LoginContext.Consumer>
            {
                loginContext => {
                    const clickLogin = () => {
                        loginContext.setIsLogin(true);
                        navigate("/admin")
                    }
                    return (
                        <div style={{marginTop: '10px'}}>
                            <div>
                                You must log in to view the page at /admin
                            </div>
                            {!loginContext.isLogin && (
                                <div style={{marginTop: '10px'}}>
                                    <button onClick={clickLogin}>
                                        Login
                                    </button>
                                </div>
                            )}
                        </div>
                    )
                }
            }
        </LoginContext.Consumer>
    );
}

export default Login;