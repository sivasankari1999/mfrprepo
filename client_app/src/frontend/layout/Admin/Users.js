import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Adminhome.css"
import { Link } from "react-router-dom";
export default function Users() {
    let [usersList, setUsersList] = useState([]);
    const getUsers = async () => {
        const users = await axios.get("http://localhost:5000/users");
        //console.log(users);
        setUsersList(users.data.foodList);
    };
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <>
            <div className="w3-container">
                <div id="Users">
                    <table className='table mt-5' style={{ marginLeft: "190px" }}>
                        <thead>
                            <tr>
                                <th >FullName</th>
                                <th >Email</th>
                                <th >Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersList.map((user, ind) => (
                                <tr key={ind}>
                                    <td>
                                        {user.FullName}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.password}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}