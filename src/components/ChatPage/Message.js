import './Message.css';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Avatar from './../Image/profile-picture-boy-1.jpeg';

function Message({sent,data,img}) {
    if (sent) {
        return <div className="container lighter">
            <img src={img} className='right' alt="Avatar"></img>
            <p>{data}</p>
            <span className="time-right">11:00</span>
        </div>
    } else {
        return <div className="container darker">
            <img src={Avatar} alt="Avatar"></img>
            <p>{data}</p>
            <span className="time-left">11:01</span>
        </div>
    }
    
}

export default Message;