import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'

 function Adduser() {
     const [user, setUser] = useState({
        name: '',
        email: '' 
     })
     
     const handleChange = (event) => {
         const {name, value} = event.target
         setUser(prevUser => {
             return {
                 ...prevUser,
                 [name]: value
             }
         })
     }

     const handleClick = (event) => {
         event.preventDefault()
         const newUser = {
             name: user.name,
             email: user.email
         }

         axios.post('http://localhost:8000/api/users', newUser)
         console.log(user)
     }
  return (
      <div className='container'>
          <h1>Create User</h1>
          <form>
              <div className='form-group'>
                  name:
                  <input onChange={handleChange} name="name" value={user.name}></input>
              </div>
              <div className='form-group'>
                  email:
                  <input onChange={handleChange} name="email" value={user.email}></input>
              </div>
              <button onClick={handleClick} className='btn btn-lg btn-info'>Add User</button>
          </form>
      </div>
  )
}

export default Adduser