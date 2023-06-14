import {useContext} from "react";
import AuthContext from "../../context/AuthContext";
import {Greeting, GreetingText, HomePage, Main, MainNoUser, MainUser, PersonalGreeting, Images} from "./HomePage.styles"
import Car from "../../assets/car-0.jpg"
import Car1 from "../../assets/car-1.jpg"
import Car2 from "../../assets/car-2.jpg"

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <HomePage>
            <Greeting>
                <img src={Car} style={{width: 740, aspectRatio: 16 / 9}} alt="no image"/>
                <GreetingText>
                    {
                        user &&
                        <PersonalGreeting>
                            <p>Hello, {user.first_name} {user.last_name}.<br/>
                                Glad to meet you again!</p>
                        </PersonalGreeting>
                    }
                    <p>Welcome to Our Car Rental Service.<br/>Rent the perfect car for your journey.</p>
                </GreetingText>
            </Greeting>
            <Main>
                {
                    user ?
                        <MainUser>
                            <p>Explore our diverse range of premium vehicles available for rent.</p>
                            <p>From stylish sedans to spacious SUVs, we have the perfect car to suit your travel needs.</p>
                            <p>Browse through our collection, compare features and pricing, and book your preferred car with just a few clicks.</p>
                            <p>Enjoy the convenience and comfort of renting with Our Car Rental Service.</p>
                            <a href="/transport"><button>Explore</button></a>
                        </MainUser>
                        :
                        <MainNoUser>
                            <p> Discover our diverse range of premium vehicles available for rent.</p>
                            <p>We have the perfect car to suit your travel needs.</p>
                            <p>Create an account for exploring our collection and have ability to book your preferred
                                car.</p>
                            <p>Experience the convenience and comfort of renting with Our Car Rental Service.</p>
                            <a href="/register"><button>Join Us Today</button></a>
                        </MainNoUser>
                }
                <Images>
                <img className="first_img" src={Car1} style={{width: 400, aspectRatio: 16 / 9}} alt="no image"/>
                <img className="second_img" src={Car2} style={{width: 460, aspectRatio: 16 / 9}} alt="no image"/>
                </Images>
            </Main>
        </HomePage>
    );
};

export default Home;
