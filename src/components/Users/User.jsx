import { useEffect, useState } from "react";
import './User.css'
import UserDetails from "./UserDetails";
 
const User = () => {
    const [users, setUsers] =  useState([])

    useEffect ( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    } , [])

    return (
        <div className="Users">
            <h2>Checking out the users of our server</h2>
            <h2>Our Users Number : {users.length} </h2>
            {
                users.map(user => <UserDetails key={users.id} user={user}></UserDetails>)
            }
        </div>
    );
};

export default User;