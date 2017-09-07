import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Header = () => (
  <div>
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

// Header.propTypes = {
//   route: PropTypes.string.isRequired
// };

export default Header;
