import './Message.css';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Avatar from './../../Image/profile-picture-boy-1.jpeg';

function Message({sent,data,img,time}) {

    if (sent) {
        return <div className="container lighter">
            <img src={img} className='right' alt="Avatar" ></img>
          <h6> <p className='dataStyle'>{data}</p></h6> 
            <span className="time-right">{time}</span>
        </div>
    } else {
        return <div className="container darker">
            <img src={Avatar} alt="Avatar"></img>
            <h6> <p className='dataStyle'>{data}</p></h6> 
            <span className="time-left">{time}</span>
        </div>
    }
    
}

export default Message;