import {useState, useContext} from "react";
import AuthContext from "../context/AuthContext";

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

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <hr/>
                <div>
                    <label htmlFor="firstName">First name</label>
                    <input
                        type="text"
                        id="firstName"
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="First name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last name</label>
                    <input
                        type="text"
                        id="lastName"
                        onChange={e => setLastName(e.target.value)}
                        placeholder="Last name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        onChange={e => setPhone(e.target.value)}
                        placeholder="Phone"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm-password"
                        onChange={e => setPassword2(e.target.value)}
                        placeholder="Confirm Password"
                        required
                    />
                    <p>{password2 !== password ? "Passwords do not match" : ""}</p>
                </div>
                <button>Register</button>
            </form>
        </section>
    );
}

export default Register;
