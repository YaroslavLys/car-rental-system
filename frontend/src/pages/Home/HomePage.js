import {useContext} from "react";
import UserWelcome from "../../components/UserWelcome";
import AuthContext from "../../context/AuthContext";

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <section>
            {user && <UserWelcome user={user}/>}
            <h1>You are on home page!</h1>
        </section>
    );
};

export default Home;
