import React from "react";
import MyPosts from "./MyPost/MyPosts";
import "./Profile.css"
import ProfileButton from "./MyPost/ProfileButton";

const Profile = () => {
  return (
    <div className="contentImg">
        <div>
          <img src="https://svgsilh.com/svg/303713.svg" alt="grass" />
        </div>
        <div>
          <MyPosts />
          <ProfileButton />
        </div>
      </div>
  );
};

export default Profile;
