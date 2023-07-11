import '../css/Nabvar.css'
import { Link } from "react-router-dom"

import navb from "../assets/images/header.jpg"

const Navbar = () => {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg  navbar-back" >
      <img src={navb} alt="menu" className="header-img"/>
        <div className="container">
          <a className="navbar-brand" href="#">
            <p className="text-size">MM |</p>
          </a>
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
          {/* TODO: SE PONE BLANCO CAMBIAR A TRANSPARENTE */}
          <div className="collapse navbar-collapse back-menu-res " id="navbarNav">
            <ul className="navbar-nav ms-auto list-group" >
              <li className="nav-item list-group-item " >
                <Link className="nav-link navbar-collapse link-style" aria-current="page"  to='/'>
                  <p className='p-style'>Inicio</p>
                </Link>
              </li>
              <li className="nav-item list-group-item ">
                <Link className="nav-link link-style" to="/Planes">
                  <p className='p-style'>Planes</p>
                </Link>
              </li>
              <li className="nav-item list-group-item">
                <Link className="nav-link link-style" to="/Servicio">
                  <p className='p-style'>Servicio</p>
                </Link>
              </li>
              <li className="nav-item list-group-item">
                <Link className="nav-link link-style" to="/Blog"><p className='p-style'>Blog</p></Link>
              </li>
              <li className="nav-item list-group-item">
                <Link className="nav-link link-style" to="/Tienda"><p className='p-style'>Tienda</p></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
