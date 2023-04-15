import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Daily-Dose News
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/"> Home</Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/health"> Health </Link> </li>
            <li className="nav-item"><Link className="nav-link" to="/general"> General </Link> </li>
            <li className="nav-item"><Link className="nav-link" to="/entertainment"> Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technology"> Technology</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports"> Sports </Link> </li>
            <li className="nav-item"><Link className="nav-link" to="/business"> Business </Link> </li>
            <li className="nav-item"><Link className="nav-link" to="/science"> Science </Link> </li>

          </ul>
          <div className={`form-check form-switch mx-3 pl-3 text-${props.mode === 'light'?'dark':'light'}`}>
           <input className="form-check-input" type="checkbox" onClick={props.toggleMode}   id="switch"/>
           <label className="form-check-label" htmlFor="switch"> {props.btn} </label>
        </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar