import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        {/* Background image */}
        <img src="https://i.imgur.com/qGklz4b.jpg" alt="" />
        {/* User image */}
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {/* Remember state.user = action.payload? This email comes from the action dispatched to login (key name) */}
          {user.email[0]}
        </Avatar>
        {/* User display name */}
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,534</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,534</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
