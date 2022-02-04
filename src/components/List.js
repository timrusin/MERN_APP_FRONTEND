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
  }, [user]);
  console.log(user);

    const handleClick = (id) => {
        axios.delete(`http://localhost:8000/api/users/${id}`)
  };
  return (
    <div>
      {user.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
            <h2>{item.email}</h2>
            <h6>{item._id}</h6>
            <button onClick={() => handleClick(item._id)} className="btn btn-lg btn-info">
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default List