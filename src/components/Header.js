import React from "react";
import "./styles/header.css";


export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <span className="logo">VL.RU <span className="off">OFF</span></span>
          <a href="/">главная</a>
          <a href="/mobile">уведомления об отключении</a>
          <a href="/sites">показания счётчиков</a>
          <a href="/organizations">управляющие организации</a>
          <a href="/posts">посты</a>
        </nav>
      </div>
      <div className="header-center-text">
        Отключения Владивостока: вода, свет, отопление
      </div>
    </header>
  );
}
