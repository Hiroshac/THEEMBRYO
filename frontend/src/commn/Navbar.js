import React, { useEffect, useState } from "react";
import logo from '../image/logo.jpg';

export const Navbar = () => {

const [item,setItem] = useState([]);

  function logout() {
    localStorage.removeItem("user");
    window.location = "/admin";
  }
  
  return (
    <div>
      <>
        {localStorage.getItem("user") === "null" ||
        localStorage.getItem("user") === null ||
        localStorage.getItem("user") === "" ? (
          <>
          {/* client navigation bar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
                  
               <a className="navbar-brand ml-5" href="/">
                   <img src={logo} width="180" height="50" className="d-inline-block align-top" alt=""/>
               </a>
               <div className="ml-5 pl-5"></div>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item ">
                        <a className="nav-link" href="/">Home</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Studios
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="#">Intrapreneurship Studio</a>
                          <a className="dropdown-item" href="#">Entrepreneurship Studio</a>
                          <a className="dropdown-item" href="#">Internship Studio</a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Products and Solutions
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="/innovation">Innovation</a>
                          <a className="dropdown-item" href="#">Managment Console</a>
                          <a className="dropdown-item" href="#">Developer Cloud</a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Colabaration and Programms
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="/university">University Partnership</a>
                          <a className="dropdown-item" href="/industry">Industry Partnership</a>
                          <a className="dropdown-item" href="/ongoing">Ongoing Programms</a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Latest News
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="#">News/Event</a>
                          <a className="dropdown-item" href="#">Blogs</a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Contact US
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a className="dropdown-item" href="#">Contact US</a>
                          <a className="dropdown-item" href="#">Our Team</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
          </>

          // admin navigation bar
        ) : (
          <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="/user">Users</a>
                      </li>
                      <li class="nav-item active">
                        <a class="nav-link" href="/Ainnovation">Innovation</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Colabaration and Programms
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="/Auniversity">University Partnership</a>
                          <a class="dropdown-item" href="/Aindustry">Industry Partnership</a>
                          <a class="dropdown-item" href="/Aongoing">Ongoing Partnership</a>
                        </div>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         News and Events
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">News And Events</a>
                          <a class="dropdown-item" href="#">Blogs</a>
                        </div>
                      </li>
                      <li class="nav-item active">
                        <a class="nav-link" href="/user">Our Team</a>
                      </li>
                  </ul>
                  </div>
                  <div>
                    <h6>User Name : {JSON.parse(localStorage.getItem('user')).name}</h6>
                    <h6>Email : {JSON.parse(localStorage.getItem('user')).email}</h6>
                  </div>
                  <div>
                    <span className="btn btn-outline-dark" onClick={logout}>
                        <i className="fa fa-sign-in me-1"></i> Logout
                    </span>
                  </div>
                </nav>
          </>
        )}
      </>
    </div>
  );
};

