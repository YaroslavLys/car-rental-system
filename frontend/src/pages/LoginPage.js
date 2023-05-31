import {useContext} from "react";
import AuthContext from "../context/AuthContext";
import * as Yup from "yup";
import {Formik} from "formik";

const LoginPage = () => {
    const {loginUser} = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        email.length > 0 && loginUser(email, password);
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h1>Login </h1>
                <hr/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter Email"/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter Password"/>
                <button type="submit">Login</button>
            </form>
        </section>
    );
};

export default LoginPage;
