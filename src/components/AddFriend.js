import React, { useState } from "react";
import { axiosWithAuth } from "./../axiosWithAuth";
import { useHistory } from "react-router-dom";
import "./AddFriend.css";

export default function AddFriend() {
  const history = useHistory();
  const [newFriend, setNewFriend] = useState({
    name: "",
    email: "",
  });

  const addFriend = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("http://localhost:9000/api/friends", newFriend)
      .then((response) => {
        setNewFriend({
          name: "",
          email: "",
        });
        history.push("/friends-list");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    setNewFriend({
      ...newFriend,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={addFriend}>
      <label htmlFor="name">
        FRIEND NAME
        <input
          type="text"
          id="name"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">
        FRIEND EMAIL
        <input
          type="email"
          id="email"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">SUBMIT</button>
    </form>
  );
}
