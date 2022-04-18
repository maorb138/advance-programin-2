import * as React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
function Nav() {
    return (
        <ul className="nav justify-content-end">
            <NavLink href="/login" className="chat-logo"><span className="header"><i className="bi bi-chat-left-text-fill"></i> ChatApp</span></NavLink>
            <li className="nav-item">
                <NavLink className="nav-link" to='/register' >Register</NavLink>
            </li>
        
            <li className="nav-item">
                <NavLink className="nav-link" to="/chatForm" >ChatForm</NavLink>
            </li>
        </ul>
		);
}
export default Nav;