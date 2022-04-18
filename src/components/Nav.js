import * as React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import ChatPage from './ChatPage';
function Nav() {
    return (
        <ul className="nav justify-content-end">
            <NavLink to="/login" className="chat-logo"><span className="header"><i className="bi bi-chat-left-text-fill"></i> ChatApp</span></NavLink>
            <li className="nav-item">
                <NavLink className="nav-link" to='/register' >Register</NavLink>
            </li>
        
            <li className="nav-item">
                <NavLink className="nav-link" to="/chatForm" >ChatPage</NavLink>
            </li>
        </ul>
		);
}
export default Nav;