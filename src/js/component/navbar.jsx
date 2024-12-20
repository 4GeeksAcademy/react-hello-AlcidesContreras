import React from "react";
import PropTypes from "prop-types";

const Navbar = ({title, tab1, tab2, tab3, tab4 }) => {
	return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body " data-bs-theme="dark">
    <div className="container-fluid col-md-12">
      <a className="navbar-brand ms-4" href="#">{title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{tab1}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{tab2}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{tab3}</a>
          </li>
          <li className="nav-item d-flex">
            <a className="nav-link" href="#">{tab4}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav >
	);
};

Navbar.prototype = {
    title: PropTypes.string,
    tab1: PropTypes.string,
    tab2: PropTypes.string,
    tab3: PropTypes.string,
    tab4: PropTypes.string
}

export default Navbar;

