import React from 'react'

export const Navbar = () => {
  console.log(localStorage.getItem("user"));
  return (
    <div>
        <nav class="nav">
          {(localStorage.getItem("user") !== "null") || (localStorage.getItem("user") !== null) || (localStorage.getItem("user") !== "")? (
              <>
                <a class="nav-link active" href="/reg">Registation</a>
                <a class="nav-link" href="/admin">Login</a>
                <a class="nav-link" href="/innovation">Innovation</a>
                <a class="nav-link" href="/user">User</a>
                <div>
                  <a href="/logout" className="btn btn-outline-dark">
                        <i className="fa fa-sign-in me-1"></i> Logout
                  </a>
                </div>   
              </>
            ) : (
              <>
                <a class="nav-link active" href="/reg">Home</a>
                <a class="nav-link" href="/admin">test</a>
                <a class="nav-link" href="/user">User</a>
                <a class="nav-link" href="/user">User</a>
              </>
            )}
        </nav>
    </div>
  )
}
