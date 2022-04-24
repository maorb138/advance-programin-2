import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Message from './Message';
import Avatar from './../Image/profile-picture-boy-1.jpeg';



function Messages({ messages }) {

    const [mess, setmess] = useState(messages);
    const t = messages.map((i) => {
        return <Message sent={i.sent}/>
    })

    return (
        <div  className='mess'>
            {t}
            </div>
        )
}

export default Messages;