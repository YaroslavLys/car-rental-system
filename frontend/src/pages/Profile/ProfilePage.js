import useAxios from "../../utils/useAxios";
import {useEffect, useState} from "react";
import AvatarUploader from "../../components/Avatar/AvatarUploader";
import {baseUserProfileURL} from "../../utils/baseURLs";
import noAvatarImage from "../../assets/no_avatar_image.jpg";
import {useHistory} from "react-router-dom";
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
            setBio(res.bio);
            setFirstName(res.user.first_name);
            setLastName(res.user.last_name);
            setEmail(res.user.email);
            setPhone(res.user.phone);
            setBalance(res.user.balance);
            setCreatedAt(res.user.created_at);
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
            </OrdersInfo>

            <p>Joined at: {createdAt}</p>
        </ProfileInner>
    );
}

export default Profile;