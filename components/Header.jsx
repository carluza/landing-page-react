import React from "react";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container d-flex justify-content-between align-items-center mx-5">
        {/* Contenedor del logo */}
        <div className="d-flex mx-5">
          <a className="navbar-brand fs-5 text-white" href="#">
            Start Bootstrap
          </a>
        </div>

        {/* Contenedor del menú de navegación */}
        <div className="d-flex mx-5 ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
