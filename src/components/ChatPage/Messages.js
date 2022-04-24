import './ChatPage.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Message from './Message';


function Messages({ messages }) {
    console.log(typeof messages);
    const a = useRef(null)
    const [mess, setmess] = useState(messages);
    const t = messages.map((i) => {

        return <Message />
    })

    return (
        <div  className='mess'>
            {t}
            </div>
        )
}

export default Messages;