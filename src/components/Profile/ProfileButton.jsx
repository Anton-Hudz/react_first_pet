import React from "react";
import "./ProfileButton.css";

const ProfileButton = () => {
  return (
    <div className="social__profile_buttons">
      <button className="social__profile__button v4">Click meeee</button>
      <a href="#s">
        <i className="social__profile__button v3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Goat_Noun_project_853142.svg" alt="" />
        </i>
      </a>
    </div>
  );
};

export default ProfileButton;
