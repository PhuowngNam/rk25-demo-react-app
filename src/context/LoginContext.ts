import React from "react";

export type LoginContextType = {
    isLogin: boolean,
    setIsLogin: (isLogin: boolean) => void
}

export const defaultLoginContext: LoginContextType = {
    isLogin: false,
    setIsLogin: (isLogin) => {}
}

export const LoginContext = React.createContext<LoginContextType>(defaultLoginContext);