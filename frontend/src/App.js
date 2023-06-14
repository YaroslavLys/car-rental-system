import React from "react";
import "./index.css";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {Wrapper} from "./App.styled";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import {AuthProvider} from "./context/AuthContext";
import CreditCardForm from "./pages/CreditCardPage/CreditCardForm";
import UpdateBioForm from "./pages/UpdateBioPage/UpdateBioForm";

import Home from "./pages/Home/HomePage";
import Login from "./pages/Login/LoginPage";
import Register from "./pages/Register/RegisterPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import TransportPage from "./pages/Transport/TransportPage";
import TransportDetailsPage from "./pages/TransportDetails/TransportDetailsPage";
import OrderDetailsPage from "./pages/OrderDetails/OrderDetailsPage";
import CreateOrderPage from "./pages/CreateOrder/CreateOrderPage";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen overflow-hidden">
                <AuthProvider>
                    <Navbar/>
                    <Wrapper>
                        <Switch>
                            <PrivateRoute component={TransportPage} path="/transport" exact/>
                            <PrivateRoute component={ProfilePage} path="/profile" exact/>
                            <PrivateRoute component={CreditCardForm} path="/credit-card" exact/>
                            <PrivateRoute component={UpdateBioForm} path="/update-bio" exact/>
                            <PrivateRoute component={TransportDetailsPage} path="/transport/:id" exact />
                            <PrivateRoute component={OrderDetailsPage} path="/order/:id" exact />
                            <PrivateRoute component={CreateOrderPage} path="/transport/:id/create-order" exact />
                            <Route component={Login} path="/login"/>
                            <Route component={Register} path="/register"/>
                            <Route component={Home} path="/"/>
                            {/*document.location.reload(true);*/}
                        </Switch>
                    </Wrapper>
                </AuthProvider>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
