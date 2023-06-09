import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar({title, mode, handleMode}) {
    const capitalize = (word) =>{
        return word.charAt(0).toUpperCase();
    }

    return ( 
        <>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand text-${mode==='warning'?'dark':'light'}`} to="/">{title}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link text-${mode==='warning'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${mode==='warning'?'dark':'light'}`} to="/about">About</Link>
                            </li>  
                        </ul> 
                    </div> 
                    <div className={`form-check form-switch text-${mode==='warning'?'black':'warning'}`}>
                        <input onClick={handleMode} className="form-check-input" type="checkbox" id="mySwitch"/>
                        <label className={`form-check-label text-${mode==='warning'?'dark':'light'}`} htmlFor="mySwitch">Enable {capitalize(mode==='warning'?'dark':'light')} Mode</label>
                    </div>
                </div>
            </nav>    
        </>
    );
}

Navbar.prototypes = {
    title: PropTypes.string
}
