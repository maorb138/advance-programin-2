import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Message from './Message';
import Avatar from './../Image/profile-picture-boy-1.jpeg';



function Messages({ messages ,img}) {

    const [mess, setmess] = useState(messages);
    const t = messages.map((i) => {
        return <Message sent={i.sent} data={i.message} img={img}/>
    })

    return (
        <div  className='mess'>
            {t}
            </div>
        )
}

export default Messages;