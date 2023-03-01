import React from "react";
import ProfileButton from "./ProfileButton";

const Profile = () => {
  return (
    <div className="content">
        <div>
          <img src="https://svgsilh.com/svg/303713.svg" alt="grass" />
        </div>
        <div>ava+description</div>
        <div>
          my post
          <div>New post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
          <ProfileButton />
        </div>
       
       
        
      </div>
  );
};

export default Profile;
