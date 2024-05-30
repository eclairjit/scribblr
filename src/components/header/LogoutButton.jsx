import React from "react";
import { useDispatch } from "react-redux";
import { authService } from "../../appwrite/auth.js";
import { logout } from "../../features/authSlice.js";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
    navigate("/");
  };

  return (
    <button
      onClick={logoutHandler}
      className="inline-block px-6 py-2 duration-200 hover:bg-zinc-100 hover:text-zinc-900 hover:font-semibold rounded-md"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
