import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import {AuthProvider} from "./context/AuthContext";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import ProtectedPage from "./pages/ProtectedPage";
import ProfilePage from "./pages/ProfilePage";
import CreditCardForm from "./pages/CreditCardPage/CreditCardForm";
import UpdateBioForm from "./pages/UpdateBioPage/UpdateBioForm";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen overflow-hidden">
                <AuthProvider>
                    <Navbar/>
                    <Switch>
                        <PrivateRoute component={ProtectedPage} path="/protected" exact/>
                        <PrivateRoute component={ProfilePage} path="/profile" exact/>
                        <PrivateRoute component={CreditCardForm} path="/credit-card" exact/>
                        <PrivateRoute component={UpdateBioForm} path="/update-bio" exact/>
                        <Route component={Login} path="/login"/>
                        <Route component={Register} path="/register"/>
                        <Route component={Home} path="/"/>
                    </Switch>
                </AuthProvider>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
