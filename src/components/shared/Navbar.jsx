import React from "react";
import { Link, redirect, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../custom.css";
const Navbar = () => {
  const location = useLocation();
  const path = location.pathname.substring(1);

  const navItem = [
    {
      name: "Home",
      redirect: "/",
      active: path === "/",
    },

    {
      name: "General",
      redirect: "/general",
      active: path === "general",
    },
    {
      name: "Business",
      redirect: "/business",
      active: path === "business",
    },
    {
      name: "Technology",
      redirect: "/technology",
      active: path === "technology",
    },
    {
      name: "Entertainment",
      redirect: "/entertainment",
      active: path === "entertainment",
    },
    {
      name: "Health",
      redirect: "/health",
      active: path === "health",
    },
    {
      name: "Science",
      redirect: "/science",
      active: path === "science",
    },

    {
      name: "Sports",
      redirect: "/sports",
      active: path === "sports",
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary ]">
        <div className="container-fluid d-flex justify-content-between align-items-center mx-4">
          <Link className="navbar-brand" to="/">
            <h5 className="display-4 text-white hover-zoom">
              <img
                src="abcnews-logo.jpg"
                className="img-fluid  border shadow-sm"
                style={{ height: "60px" }}
                alt="logo"
              />
            </h5>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul class="navbar-nav rounded-4 shadow-lg mb-lg-0 mb-2 flex-grow-1  justify-content-center gap-4 ">
              {navItem?.map((o, i) => {
                return (
                  <li className="nav-item" key={i}>
                    <Link
                      className={`nav-link ${
                        o.active ? "active-link" : ""
                      } text-light fs-5 px-2 py-2 hover-zoom`}
                      aria-current="page"
                      to={o.redirect}
                    >
                      {o.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="d-flex justify-content-end">
              {/* <Link to="/search" className="text-light me-3 fs-5">
                <i className="bi bi-search custom-icon"></i>
              </Link> */}
              <Link to="/auth/login" className="text-light fs-5 hover-zoom">
                <i className="bi bi-person-circle custom-icon"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
