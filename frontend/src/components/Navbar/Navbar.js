import {useContext} from "react";
import {Link} from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {Nav, NavWrapper, NavInner, NavBar, Title, NavLogged, NavCommon, NavElement} from "./Navbar.styles"

const Navbar = () => {
    const {user, logoutUser} = useContext(AuthContext);
    return (
        <NavWrapper>
            <Nav>
                <NavInner>
                    <a href="/"><Title>Car rental system</Title></a>
                    <NavBar>
                        {user ? (
                            <NavLogged>
                                <NavElement><Link to="/">Home</Link></NavElement>
                                <NavElement><Link to="/transport">Transport Page</Link></NavElement>
                                <NavElement><Link to="/profile">Profile</Link></NavElement>
                                <NavElement>
                                    <button onClick={logoutUser}>Logout</button>
                                </NavElement>
                            </NavLogged>
                        ) : (
                            <NavCommon>
                                <NavElement><Link to="/login">
                                    <button>Login</button>
                                </Link></NavElement>
                                <NavElement><Link to="/register">
                                    <button>Register</button>
                                </Link></NavElement>
                            </NavCommon>
                        )}
                    </NavBar>
                </NavInner>
            </Nav>
        </NavWrapper>
    );
};

export default Navbar;
