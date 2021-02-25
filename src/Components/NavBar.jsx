import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div className="bnt-group">
                <Link to="/about" className="btn btn-primary">About</Link>
                <Link to="/contacto" className="btn btn-success">Contact</Link>
                <Link to="/" className="btn btn-danger">Home</Link>

            </div>

        </div>
    )
}

export default NavBar
