import useAxios from "../utils/useAxios";
import {useEffect, useState} from "react";
import AvatarUploader from "../components/AvatarUploader";
import {baseUserProfileURL} from "../utils/baseURLs";
import noAvatarImage from "../assets/no_avatar_image.jpg";


function Profile() {
    const api = useAxios();
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
        <div>
            <h1>User Profile</h1>
            <h2>Avatar</h2>
            <img src={avatar ? (avatar) : (noAvatarImage)}
                 style={{width: "300px", height: "300px", borderRadius: "150px"}} alt="No avatar"/>
            <AvatarUploader/>
            <h2>About user:</h2>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Balance: {balance}</p>
            <p>Bio: {bio}</p>
            <p>Joined at: {createdAt}</p>
        </div>
    );
}

export default Profile;