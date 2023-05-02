import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "./../axiosWithAuth";
import "./Header.css";

export default function Header() {
  const history = useHistory();

  const handleLogout = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("http://localhost:9000/api/logout")
      .then(() => {
        localStorage.removeItem("token");
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <header>
      <h1>FRIENDS DATABASE</h1>
      <div className="navbar">
        <Link to="/">
          <button>LOGIN.</button>
        </Link>
        <Link to="/friends-list">
          <button>FRIENDLIST.</button>
        </Link>
        <Link to="/add-friend">
          <button>ADDFRIEND.</button>
        </Link>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    </header>
  );
}
