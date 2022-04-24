import './Message.css';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Message() {
    return (
        <div className='message row'>
            <img className="column" src="img.jpg" alt="John" style={{width:'50%'}}></img>
            <h6 className="column">John Doe</h6>
            <h4 className="title column">Example</h4>
            <h4 className="column">University</h4>
            <h4 className="column"><button className="column">Contact</button></h4>
        </div>
    )
}

export default Message;