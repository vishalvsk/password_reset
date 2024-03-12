import React from 'react'
import "./Header.css";
import Avatar from "@mui/material/Avatar";

function Header() {
  return (
    <>
      <header>
        <nav>
          <h1>Hp Cloud</h1>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </nav>
      </header>
    </>
  );
}

export default Header
