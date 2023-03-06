import React from "react";
import s from "./MyPosts.module.css"


const MyPosts = () => {
  return (
    <div className={s.content}>
        <div>ava+description</div>
        <div>
          my post
          <div>New post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        
        </div>
      </div>
  );
};

export default MyPosts;
