import * as React from 'react';
import './Nav.css';

function Nav() {
    
    return (
        <ul className="nav justify-content-end">
            <a href="/" className="chat"><span className="header"><i className="bi bi-chat-left-text-fill"></i> ChatApp</span></a>
            <li className="nav-item">
                <a className="nav-link" href="/register" >Register</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/login" >Login</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/chatForm" >ChatForm</a>
        </li>
        </ul>
		);
}
export default Nav;