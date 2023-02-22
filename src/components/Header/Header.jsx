import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://as2.ftcdn.net/v2/jpg/00/85/92/17/1000_F_85921720_l8LNvhb18kbXG3HsXMFINhT3HrfIFLlq.jpg"
          alt="koza-img"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Goat_Noun_project_853142.svg"
          alt="koza2-img"
        />
      </header>
      <nav className="nav">
        <div>
          <a href="#s">Profile</a>
        </div>
        <div>
          <a href="#s">Messages</a>
        </div>
        <div>
          <a href="#s">News</a>
        </div>
        <div>
          <a href="#s">Music</a>
        </div>
        <div>
          <a href="#s">Settings</a>
        </div>
      </nav>
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
        </div>
        Main content
        <a href="#s">Тут буде написана якась х**ня</a> -
        <a href="#s">тута якась дичь</a>
        <a href="#s">а тут щє не придумав</a>
      </div>
    </div>
  );
}
