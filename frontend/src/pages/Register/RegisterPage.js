import {useState, useContext} from "react";
import AuthContext from "../../context/AuthContext";
import {Section, LeftPart, RightPart, Title, Description, Form, Button} from "./RegistesPage.styles";

function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const {registerUser} = useContext(AuthContext);

    const handleSubmit = async e => {
        e.preventDefault();
        registerUser(firstName, lastName, email, phone, password, password2);
    };

    return (<Section>
            <LeftPart>
                <Title>Welcome Back !</Title>
                <Description>To keep connected with us please login with your personal info</Description>
                <a href="/login"><Button>SIGN IN</Button></a>
            </LeftPart>
            <RightPart>
                <Title>Register</Title>
                <Description>please enter your personal information for registration</Description>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            id="firstName"
                            onChange={e => setFirstName(e.target.value)}
                            placeholder="First name"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="lastName"
                            onChange={e => setLastName(e.target.value)}
                            placeholder="Last name"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="email"
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="phone"
                            onChange={e => setPhone(e.target.value)}
                            placeholder="Phone"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="password"
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="confirm-password"
                            onChange={e => setPassword2(e.target.value)}
                            placeholder="Confirm Password"
                            required
                        />
                        <p>{password2 !== password ? "Passwords do not match" : ""}</p>
                    </div>
                    <Button>Register</Button>
                </Form>
            </RightPart>
        </Section>);
}

export default Register;
