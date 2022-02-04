import React from 'react';
import { useState } from 'react'
import axios from 'axios';

function Edituser() {
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser(prevUser => {
            return {
                ...prevUser,
                [name]: value
            }
        })
    }

    const handleClick = (event) => {
        event.preventDefault()
        console.log(user)
        const changeUser = {
            id: user._id,
            name: user.name,
            email: user.email
        }
        axios.put(`http://localhost:8000/api/users/${user.id}`, changeUser)
    }
    return (
        <div className='container'>
            <h1>Edit User</h1>
            <form>
                <div className='form-group'>
                    id:
                    <input onChange={handleChange} name="id" value={user._id}></input>
                </div>
                <div className='form-group'>
                    name:
                    <input onChange={handleChange} name="name" value={user.name}></input>
                </div>
                <div className='form-group'>
                    email:
                    <input onChange={handleChange} name="email" value={user.email}></input>
                </div>
                <button onClick={handleClick} className='btn btn-lg btn-info'>Edit User</button>
            </form>
        </div>
    )
}


export default Edituser