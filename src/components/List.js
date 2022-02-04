import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

const List = () => {
  const url = "http://localhost:8000";
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, []);
  console.log(user);

  const handleClick = (event) => {
    event.preventDefault();
    const deleteUser = {
      name: user.name,
      email: user.email,
    };

    axios.delete("http://localhost:8000/api/users/", deleteUser);
    console.log(user);
  };
  return (
    <div>
      {user.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
            <h2>{item.email}</h2>
            <button onClick={handleClick} className="btn btn-lg btn-info">
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default List