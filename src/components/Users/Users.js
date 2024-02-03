"use client"
import React, { useState, useEffect } from 'react'
const Users = () => {
    const [userdata, setUserData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUserData(data))
    }, [])
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            {userdata?.map((p, i) => <div key={i} className="card-body">
                <h2 className="card-title">{p?.name}</h2>
                <p>{p?.email}</p>


            </div>)}

        </div>
    )
}

export default Users