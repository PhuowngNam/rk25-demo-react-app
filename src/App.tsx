import React, {Component} from 'react';
import './App.css';
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import CategoryList from './component/demo-router/CategoryList';
import Category from "./component/demo-router/Category";
import {DataContext, DataContextType} from "./context/DataContext";
import ProductList from "./component/demo-router/ProductList";
import {LoginContext, LoginContextType} from "./context/LoginContext";
import Admin from "./component/demo-router/Admin";
import Login from "./component/demo-router/Login";


export type AppState = {
    dataState: DataContextType,
    loginState: LoginContextType
}

class App extends Component<any, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            dataState: {
                data: {
                    categoryList: [
                        {code: 'shoes', cateName: 'Shoes'},
                        {code: 'boots', cateName: 'Boots'},
                        {code: 'footwear', cateName: 'Footwear'},
                    ],
                    productList: [
                        {
                            id: "1",
                            name: "NIKE Liteforce Blue Sneakers",
                            description: "Lorem Ipsum is simply dummy text of the printing and " +
                                "typesetting industry",
                            status: 'Available'
                        },
                        {
                            id: "2",
                            name: "Stylised Flip Flops and Slippers",
                            description: "There are many variations of passages of Lorem Ipsum " +
                                "available, but the majority have suffered alteration in some " +
                                "form, by injected humour, or randomised words which don't look " +
                                "even slightly believable.",
                            status: 'Out of Stock'
                        },
                        {
                            id: "3",
                            name: "ADIDAS Adispree Running Shoes",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
                                "elit, sed do eiusmod tempor incididunt ut labore et dolore " +
                                "magna aliqua. ",
                            status: 'Available'
                        },
                        {
                            id: "4",
                            name: "ADIDAS Mid Sneakers",
                            description: "But I must explain to you how all this mistaken idea" +
                                " of denouncing pleasure and praising pain was born and I will " +
                                "give you a complete account of the system, and expound the " +
                                "actual teachings of the great explorer of the truth, " +
                                "the master-builder of human happiness",
                            status: 'Out of Stock'
                        },
                    ],
                }
            },
            loginState: {
                isLogin: false,
                setIsLogin: this.setIsLogin
            }
        }
    }

    setIsLogin = (isLogin: boolean) => {
        this.setState({
            ...this.state,
            loginState: {
                ...this.state.loginState,
                isLogin: isLogin
            }
        })
    }

    render() {
        const linkList = [
            {to: '/home', name: 'Home'},
            {to: '/category', name: 'Category'},
            {to: '/product', name: 'Product'},
            {to: '/admin', name: 'Admin'},
        ]

        const routeList = [
            {path: "/home", element: <Home/>},
            {path: "/category", element: <CategoryList/>},
            {path: "/category/:code", element: <Category/>},
            {path: "/product", element: <ProductList/>},
            {path: "/product/:id", element: <ProductList/>},
            {path: "/admin", element: <Admin/>},
            {path: "/login", element: <Login/>},
            {path: "/*", element: <Navigate to="/home" replace/>},
        ]

        const navLinkStyle = {
            marginRight: '10px',
        }

        return (

            <LoginContext.Provider value={this.state.loginState}>
                <DataContext.Provider value={this.state.dataState}>
                    <div style={{display: 'flex'}}>
                        {linkList.map(link => {
                            return (
                                <NavLink
                                    to={link.to}
                                    style={({isActive}) => {
                                        return isActive ? {
                                            ...navLinkStyle,
                                            color: 'red'
                                        } : navLinkStyle
                                    }}>{link.name}</NavLink>
                            )
                        })}
                    </div>

                    <Routes>
                        {routeList.map(route => {
                            return (
                                <Route
                                    path={route.path}
                                    element={route.element}
                                />
                            )
                        })}
                    </Routes>
                </DataContext.Provider>
            </LoginContext.Provider>
        );
    }
}

const Home = () => {
    return (
        <>
            HOME
        </>
    )
}

const Error = () => {
    return (
        <>
            NO CONTENT
        </>
    )
}

export default App;
