import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Navbar = () => {
  return (
    <div className="nav_header_container">
      <div className="logo-header">
        <StaticImage src="../images/spacex-logo.png" alt="" className="img-logo" />
        <h2 className="logo">Space Travelers Hub</h2>
      </div>

      <nav className="nav_items">
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={`nav_link ${(isActive) => (isActive ? 'active' : '')}`}
              end
            >
              Rockets
            </Link>
          </li>
          <li>
            <Link
              to="/Missions/"
              className={`nav_link ${(isActive) => (isActive ? 'active' : '')}`}
            >
              Missions
            </Link>
          </li>
          <li>
            <Link
              to="/Profile/"
              className={`nav_link ${(isActive) => (isActive ? 'active' : '')}`}
            >
              My profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar
