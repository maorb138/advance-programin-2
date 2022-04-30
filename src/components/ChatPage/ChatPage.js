
import { useRef, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './ChatPage.css';
import Contacts from './Contacts/Contacts';
import Messages from './Message/Messages';
import file1 from './../Image/submit.png';
import videoupload from './../Image/upload1.png';
import imageupload from './../Image/upload.png';
import voice_black from './../Image/voice.png';
import voice_red from './../Image/voice1.png';
import filedownload from './../Image/file-download.png';
import imageSent from './../Image/imageiconsend.png';
import  videoSent from './../Image/videosendicon.png';
import textFileSend from './../Image/ib.png';
import fileTest from './../Image/test.txt';
import macarena from './../Image/macarena.mp4';
import hasson from './../Image/welcome.mp3';


function ChatPage({ users, addContacts }) {
    const _user = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(_user);
    const [contact, setContact] = useState(null);
    const [contacts, setcontacts] = useState(user && user.contacts);
    const [messages, setMess] = useState(contacts && user.contacts[0].mem);
    
    useEffect(() => {
        changeChat(contacts && user.contacts[0].username);
    },[])

    function record(e) {
        e.target.src = voice_red;
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            let recorder = new MediaRecorder(stream);
            let dataArray=[];
            var stop = document.getElementById('record_btn');

            recorder.ondataavailable = function (ev) {
                dataArray.push(ev.data);
            }
            stop.addEventListener('mouseup', function (ev) {
                recorder.stop();
                e.target.src = voice_black;
            })

            recorder.onstop = function (ev) {


                let audioData = new Blob(dataArray,
                    { 'type': 'audio/mp3/mp4;' });

                dataArray = [];

                let audioSrc = window.URL
                    .createObjectURL(audioData);



                var today = new Date();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var g = contacts.find(x => x.username === contact.username);
                g.mem = g.mem.concat({ sent: true, message: <audio src={audioSrc} controls></audio>,time: time});


                g.last = ({time:time,message:"Recording..."});
                var newMess = messages.concat([{
                    sent: true, message: <audio src={audioSrc} controls></audio>, time: time
                }]);
                setMess(newMess);
            }
            recorder.start();
        })
    }


    //document.getElementsByClassName('mainChat')[0].scrollTop = document.getElementsByClassName('mainChat')[0].scrollHeight;
    console.log(contacts);
    const changeChat = (contact) => {
        contacts.map((e) => {
            if (e.username == contact) {
                setMess(e.mem);
                setContact(e);
            }
        })
    }
     


    const sendMessage = (e) => {
        var message = document.getElementsByClassName("textinp")[0];
        var newMess;
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        //if press enter
        if (e.keyCode === 13 && message.value !== '') {
            newMess = messages.concat([{ sent: true, message: e.target.value , time: time}]);
            setMess(newMess);
            var g = contacts.find(x => x.username === contact.username);
            g.mem = g.mem.concat({ sent: true, message: e.target.value , time: time});
            g.last=({time:time,message:e.target.value});
            message.value = '';
        }
        //button
        else if (e.target.tagName.toLowerCase() == 'button' && message.value !== '') {
            newMess = messages.concat([{ sent: true, message: message.value , time: time }]);
            setMess(newMess);
            const g = contacts.find(x => x.username === contact.username);
            g.mem = g.mem.concat([{ sent: true, message: message.value , time: time}]);
            g.last=({time:time,message:message.value});
            message.value = '';
        }

    }

    const addFriend = function (username) {
        var flag = true, count = 0;

        if (username == user.username) {
            console.log("cant add yourself");
            flag = false;
            return;
        }
        contacts.map((i) => {
            if (username === i.username) {
                console.log("already friends");
                flag = false;
            }
        })
        users.map((x) => {
            if (x.username != username)count++;

        });
        if (count === users.length) {
            console.log('not exists');
            return;
        }

        if (!flag) return;
        addContacts(user, contacts.concat([{ username: username, mem: [] ,last:null}]));
        setcontacts(contacts.concat([{ username: username, mem: [], last: null }]));
    }

    const sendTextFile = (textFile) => {
        if (textFile !== undefined) {
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var g = contacts.find(x => {
                return x.username === contact.username
            });
            g.mem = g.mem.concat({
                sent: true, message: <a href={URL.createObjectURL(textFile)} download>
                    <img width="100" src={filedownload}>
                    </img>{textFile.name}</a>, time: time
            });
            g.last = ({ time: time, message: <img className="conSendStyle" width="25" height="25" src={textFileSend} /> });
            var newMess = messages.concat([{
                sent: true, message: <a href={URL.createObjectURL(textFile)} download>
                    <img width="100" src={filedownload}>
                    </img>{textFile.name}</a>, time: time
            }]);
            setMess(newMess);
        }
    }


    const sendVideo = (video) => {
        if (video !== undefined) {
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var g = contacts.find(x => {
                return x.username === contact.username
            });
            g.mem = g.mem.concat({
                sent: true, message: <video width="250" src={URL.createObjectURL(video)} controls >
                    
                </video >, time: time
            });
            g.last = ({ time: time, message: <img className="conSendStyle" width="25" height="25" src={videoSent} /> });
            var newMess = messages.concat([{
                sent: true, message: <video width="250" src={URL.createObjectURL(video)} controls>
                </video>, time: time
            }]);
            setMess(newMess);
        }
    }

    const sendImage = (image) => {
        if (image !== undefined) {
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var g = contacts.find(x => {
                return x.username === contact.username
            });
            g.mem = g.mem.concat({
                sent: true, message: <a href={URL.createObjectURL(image)} download>
                    <img width="100" src={URL.createObjectURL(image)}>
                    </img>
                </a>, time: time
            });
            g.last = ({ time: time, message: <img className="conSendStyle" width="25" height="25" src={imageSent} /> });
            var newMess = messages.concat([{
                sent: true, message: <a href={URL.createObjectURL(image)} download>
                    <img width="100" src={URL.createObjectURL(image)}>
                    </img>
                </a>, time: time
            }]);
            setMess(newMess);
        }
    }

    const sendFile = (e) => {
        const hiddenbtn = document.getElementById('hiddenbtn');
        var classname = e.target.className;        
        if (classname.includes('image')) {
            hiddenbtn.accept = "image/*";
            hiddenbtn.onchange = (e) => sendImage(e.target.files[0]);

        } else if (classname.includes('video')) {
            hiddenbtn.accept = "video/*";
            hiddenbtn.onchange = (e) => sendVideo(e.target.files[0]);

        } else {
            hiddenbtn.accept = "text/*"
            hiddenbtn.onchange = (e) => sendTextFile(e.target.files[0]);
        }
        hiddenbtn.click();

    }


    return (
        <div className="chat1">
            {user && < Contacts user={user} contacts={contacts} users={users} addFriend={addFriend} changeChat={changeChat} /> }

            <div className="mainChat">
                {contacts ? < Messages messages={messages} img={user && user.image} />:<div>hello new user</div>}
            </div>

            <div className="form-control1">
                <div id='inputs' className="addButtons">
                    <input id='hiddenbtn' type='file' hidden ></input>
            
                    <input type='image' onClick={sendFile} className='col image' src={imageupload} name='imageupload'></input>

                    <input type='image' className='col video' onClick={sendFile} src={videoupload} name='videoupload'></input>
                    <input type='image' onClick={sendFile} className='col file' src={file1} name='fileupload'></input>

                    <input type='image' onMouseDown={record} id='record_btn' className='col voice' src={voice_black} name='recorder'></input >

                </div>
                <input autoComplete="off" onKeyDown={sendMessage} className="textinp" type="text" id="formGroupExampleInput" placeholder="Enter a messege"></input>
                <button onClick={sendMessage} type="button" className="btn btn-success">Send</button>
            </div>
         </div>
        );



}

export default ChatPage;