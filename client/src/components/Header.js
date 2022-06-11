import React from 'react';
import {Link} from 'react-router-dom';
import { BiHelpCircle } from 'react-icons/bi';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Roseworths</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/' className='nav-link'>Home</Link>
        </li>
        <li className="nav-item">
        <Link to='/plants' className='nav-link'>Plants</Link>
        </li>
        <li className="nav-item">
        <Link to='/addPlant' className='nav-link'>Create a Plant</Link>
        </li>
        <li className="nav-item">
        <Link to='/gardener' className='nav-link'>Gardeners</Link>
        </li>
        <li className="nav-item">
        <Link to='/addGardener' className='nav-link'>Create a Gardener</Link>
        </li>
        <li className="nav-item">
        <Link to='/helper' className='nav-link'><BiHelpCircle />Need help?</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Header;