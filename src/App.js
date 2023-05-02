import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <div className="App">
      {/* <h1>Client Auth Projesi: Friends</h1> */}
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/friends-list" component={FriendsList} />
        <PrivateRoute path="/add-friend" component={AddFriend} />
      </Switch>
    </div>
  );
}

export default App;
