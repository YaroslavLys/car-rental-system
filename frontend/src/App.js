import React from "react";
import "./index.css";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {Wrapper} from "./App.styled";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import {AuthProvider} from "./context/AuthContext";
import Home from "./pages/Home/HomePage";
import Login from "./pages/Login/LoginPage";
import Register from "./pages/Register/RegisterPage";
import ProtectedPage from "./pages/Protected/ProtectedPage";
import ProfilePage from "./pages/Profile/ProfilePage";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen overflow-hidden">
                <AuthProvider>
                    <Navbar/>
                    <Wrapper>
                        <Switch>
                            <PrivateRoute component={ProtectedPage} path="/protected" exact/>
                            <PrivateRoute component={ProfilePage} path="/profile" exact/>
                            <Route component={Login} path="/login"/>
                            <Route component={Register} path="/register"/>
                            <Route component={Home} path="/"/>
                        </Switch>
                    </Wrapper>
                </AuthProvider>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
