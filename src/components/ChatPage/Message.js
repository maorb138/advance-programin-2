import './Message.css';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Avatar from './../Image/profile-picture-boy-1.jpeg';

function Message() {
    return (
        <div class="container">
            <img src={Avatar}alt="Avatar"></img>
                <p>Hello. How are you today?</p>
                <span class="time-right">11:00</span>
</div>
    )
}

export default Message;