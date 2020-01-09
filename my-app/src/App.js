import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <header>
        <div className="nav__wrapper">
          <div className="nav__left">
            <div className="nav__logo_wrapper">
              <img className="nav__logo" src={require("./images/KALogoMain.png")} alt="logo"></img>
            </div>
          </div>
          <div className="nav__right">
            <a className="nav__link" href="#">Programs</a>
            <a className="nav__link" href="#">About</a>
            <a className="nav__link" href="#">Admissions</a>
            <a className="nav__link" href="#">Connect</a>
            <a className="nav__link" href="#">Blog</a>
            <button className="nav__btn" href="#">Apply Now</button>
          </div>
        </div>
      </header>
      <div className="hero">
        <p className="hero__heading">Welcome to Kenzie Academy</p>
        {/* <img className="hero__img" src={require("./images/KenzieHero.png")} alt="hero image"></img> */}
      </div>
    </body>
  );
}

export default App;
