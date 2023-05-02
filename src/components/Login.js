import React, { useState } from "react";
import { axiosWithAuth } from "./../axiosWithAuth";
import { useHistory } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const login = (event) => {
    event.preventDefault();

    axiosWithAuth()
      .post("http://localhost:9000/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/friends-list");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <header className="login">LOGIN</header>
      <form onSubmit={login}>
        <label htmlFor="username" className="username">
          USERNAME
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password" className="password">
          PASSWORD
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
