import {useContext} from "react";
import {NavLink} from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {Nav, NavWrapper, NavInner, NavBar, Title, NavLogged, NavCommon, NavElement, NavLinkElement, NavUserElement, NavCommonElement} from "./Navbar.styles"

const Navbar = () => {
    const {user, logoutUser} = useContext(AuthContext);
    return (
        <NavWrapper>
            <Nav>
                <NavInner>
                    <NavBar>
                        {user ? (
                            <NavLogged>
                                <Title><a href="/">Car rental system</a></Title>
                                <NavLinkElement>
                                    <NavElement><NavLink to="/" activeClassName="selected" exact={true} id="home">Home</NavLink></NavElement>
                                    <NavElement><NavLink to="/transport" activeClassName="selected" id="protected">Transport Page</NavLink></NavElement>
                                </NavLinkElement>
                                <NavUserElement>
                                    <NavElement><NavLink to="/profile" className="fa-solid fa-user"></NavLink></NavElement>
                                    <NavElement>
                                        <button onClick={logoutUser}>Logout</button>
                                    </NavElement>
                                </NavUserElement>
                            </NavLogged>
                        ) : (
                            <NavCommon>
                                <Title><a href="/">Car rental system</a></Title>
                                <NavCommonElement>
                                    <NavElement><NavLink to="/login">
                                        <button>Login</button>
                                    </NavLink></NavElement>
                                    <NavElement><NavLink to="/register">
                                        <button>Register</button>
                                    </NavLink></NavElement>
                                </NavCommonElement>
                            </NavCommon>
                        )}
                    </NavBar>
                </NavInner>
            </Nav>
        </NavWrapper>
    );
};

export default Navbar;
