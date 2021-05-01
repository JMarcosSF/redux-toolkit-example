import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomUser, logout } from "../store/slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  let userName = {};
  if (auth.isLoggedIn && auth.user) {
    userName = auth.user.name;
  }

  return (
    <div className="header">
      <h1>Personal Library</h1>
      User: { userName.first }
      <button
        className="logouyt-btn"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
      <button
        className="user-btn"
        onClick={() => dispatch(fetchRandomUser())}
      >
        Get User Data
      </button>
    </div>
  )
}
export default Header;