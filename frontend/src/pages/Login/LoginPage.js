import {useContext} from "react";
import AuthContext from "../../context/AuthContext";
import * as Yup from "yup";
import {Formik} from "formik";
import {Wrapper, Section, LeftPart, RightPart, Title, Description, Form, Button} from "./LoginPage.styles";

const LoginPage = () => {
    const {loginUser} = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        email.length > 0 && loginUser(email, password);
    };

    return (
        <Section>
            <LeftPart>
                <Title>Login</Title>
                <Description>please login with your personal info</Description>
                <Form onSubmit={handleSubmit}>
                    <input type="email" id="email" placeholder="Enter Email"/>
                    <input type="password" id="password" placeholder="Enter Password"/>
                    <Button type="submit">SIGN IN</Button>
                </Form>
            </LeftPart>
            <RightPart>
                <Title>Hello, Friend</Title>
                <Description>Fill your personal details for registration and start journey with us</Description>
                <a href="/register"><Button>SIGN UP</Button></a>
            </RightPart>
        </Section>
    );
};

export default LoginPage;
