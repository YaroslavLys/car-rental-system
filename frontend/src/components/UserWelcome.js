function UserWelcome({user}) {
    return (
        <div>
            <h1>Hello, {user.first_name} {user.last_name}</h1>
        </div>
    );
}

export default UserWelcome;
