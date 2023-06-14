import useAxios from "../../utils/useAxios";
import {useEffect, useState} from "react";
import AvatarUploader from "../../components/Avatar/AvatarUploader";
import {baseUserProfileURL} from "../../utils/baseURLs";
import noAvatarImage from "../../assets/no_avatar_image.jpg";
import {Link, useHistory} from "react-router-dom";
import {ProfileInner, UserInfo, Avatar, BalanceInfo, OrdersInfo, PersonalDetails, Details, DetailsName, DetailsBio} from "./ProfilePage.styles"

function Profile() {
    const api = useAxios();
    const history = useHistory()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [balance, setBalance] = useState(0);
    const [bio, setBio] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [createdAt, setCreatedAt] = useState("");
    const [orders, setOrders] = useState([]);

    const getUserProfile = async () => {
        const response = await api.get(`${baseUserProfileURL}/`);
        if (response.status === 200) {
            console.log(response.data);
            return response.data;
        } else {
            alert("Something went wrong when fetching user profile!");
        }
    };

    const getUserAvatar = async () => {
        const response = await api.get(`${baseUserProfileURL}/avatar/`);
        if (response.status === 200) {
            console.log(response.data);
            return response.data;
        } else {
            alert("Something went wrong when fetching fetching user avatar!");
        }
    };

    useEffect(() => {
        getUserProfile().then((res) => {
            setBio(res.profile.bio);
            setFirstName(res.profile.user.first_name);
            setLastName(res.profile.user.last_name);
            setEmail(res.profile.user.email);
            setPhone(res.profile.user.phone);
            setBalance(res.profile.user.balance);
            setCreatedAt(res.profile.user.created_at);
            setOrders(res.orders);
        });

        getUserAvatar().then((res) => {
            setAvatar(res.avatar);
        });
    }, []);


    return (
        <ProfileInner>
            <UserInfo>
                <Avatar>
                    <img src={avatar ? (avatar) : (noAvatarImage)} alt="No avatar"/>
                    <AvatarUploader/>
                </Avatar>
                <PersonalDetails>
                    <Details>
                        <DetailsName>
                        <p>First name: <p className="p-wrapper">{firstName}</p></p>
                        <p>Last name: <p className="p-wrapper">{lastName}</p></p>
                        </DetailsName>
                        <p>Email: <p className="p-wrapper">{email}</p></p>
                        <p>Phone: <p className="p-wrapper">{phone}</p></p>
                        <DetailsBio>
                        <p>Bio: <p className="p-wrapper">{bio}</p></p>
                        <button onClick={() => history.push('/update-bio')}>Update bio</button>
                        </DetailsBio>
                    </Details>
                    <BalanceInfo>
                        <p>Balance: {balance}$</p>
                        <button onClick={() => history.push('/credit-card')}>Top Up balance</button>
                    </BalanceInfo>
                </PersonalDetails>
            </UserInfo>
            <OrdersInfo>
                <p>Orders</p>
                <ul>
                    {orders.map((item) => (
                        <li key={item.id} style={{marginTop: "20px"}}>
                            <ul>
                                <li>Transport: {item.transport.brand}, {item.transport.model}</li>
                                <li>Start date: {item.start_date}</li>
                                <li>End date: {item.end_date}</li>
                                <Link to={`/order/${item.id}`}><button>View more</button></Link>
                            </ul>
                        </li>
                    ))}
                </ul>

            </OrdersInfo>

            <p>Joined at: {createdAt.slice(0, 10)}</p>
        </ProfileInner>
    );
}

export default Profile;