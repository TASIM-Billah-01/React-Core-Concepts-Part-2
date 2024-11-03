const UserDetails = ({user}) => {
    // console.log(user);
    const {username, email} = user || {}
    return (
        <div className='details'>
            <h2>username : {username} </h2>
            <h2>email : {email} </h2>
        </div>
    );
};

export default UserDetails;