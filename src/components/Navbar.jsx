import '../css/Nabvar.css'
import { Link } from "react-router-dom"

import navb from "../assets/images/header.jpg"
import { useState } from 'react';
import { useRef } from 'react';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const divShow = useRef(null)

  const onToggle = () =>{
    setToggle(!toggle)
  }

  const onToggleTwo = () =>{
    setToggle(!toggle)
    if (divShow.current.classList.contains('show')){
      divShow.current.classList.remove('show')
    }
  }

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
            aria-expanded={toggle}
            aria-label="Toggle navigation"
            onClick={ onToggle }
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* TODO: SE PONE BLANCO CAMBIAR A TRANSPARENTE */}
          <div ref={divShow} className="collapse navbar-collapse back-menu-res" id="navbarNav">
            <ul className="navbar-nav ms-auto list-group" >
              <li className="nav-item list-group-item " >
                <Link className="nav-link navbar-collapse link-style" aria-current="page"  to='/' onClick={ onToggleTwo }>
                  <p className='p-style'>Inicio</p>
                </Link>
              </li>
              <li className="nav-item list-group-item" >
                <Link className="nav-link link-style" to="/Planes" onClick={ onToggleTwo }>
                  <p className='p-style'>Planes</p>
                </Link>
              </li>
              <li className="nav-item list-group-item">
                <Link className="nav-link link-style" to="/Servicio" onClick={ onToggleTwo }>
                  <p className='p-style'>Servicio</p>
                </Link>
              </li>
              <li className="nav-item list-group-item">
                <Link className="nav-link link-style" to="/Blog"><p className='p-style' onClick={ onToggleTwo }>Blog</p></Link>
              </li>
              <li className="nav-item list-group-item">
                <Link className="nav-link link-style" to="/Tienda"><p className='p-style' onClick={ onToggleTwo }>Tienda</p></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
