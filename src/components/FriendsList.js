import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "./../axiosWithAuth";
import "./FriendsList.css";

export default function FriendsList() {
  const [friendsList, setFriendsList] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:9000/api/friends")
      .then((res) => {
        setFriendsList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="friends-container">
      <h2>FRIENDS LIST</h2>
      <div>
        {friendsList.map((friend) => (
          <div className="friend" key={friend.id}>
            <p>-{friend.name}</p>
            <p>-{friend.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
