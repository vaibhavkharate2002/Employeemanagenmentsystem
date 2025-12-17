import React from "react";
import { Link } from "react-router-dom";

export default function Adminnavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">

        {/* Brand */}
        <Link className="navbar-brand text-light fs-1" to="/home">
          EMS
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link active text-black fs-5" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-black fs-5" to="/addemp">
                Add Employee
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-black fs-5" to="/getemp">
                View Employees
              </Link>
            </li>


<li className="nav-item">
              <Link className="nav-link text-black fs-5" to="/aboutus">
                about us
              </Link>
            </li>

             <li className="nav-item">
              <Link className="nav-link text-black fs-5" to="/service">
                services
              </Link>
            </li>

          
             <li className="nav-item">
              <Link className="nav-link text-black fs-5" to="/contactus">
                about us
              </Link>
            </li>


          </ul>
         

          {/* Search */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
}
