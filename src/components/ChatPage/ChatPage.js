
import { useRef, useState } from 'react';
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



function ChatPage({ users, addContacts }) {
    const messages1 = [{ sent: false, message: 'hello1' }, { sent: true, message: 'hello2' }, { sent: true, message: 'hello3' }, { sent: false, message: 'hello4' }];
    const [user, setUser] = useState(useLocation().state);
    const [messages, setMess] = useState(messages1);
    const [contact, setContact] = useState(null);

    function record(e) {
        console.log(e.target);
        e.target.src = voice_red;
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            let recorder = new MediaRecorder(stream);
            let dataArray=[];
            var stop = document.getElementById('record_btn');

            recorder.ondataavailable = function (ev) {
                dataArray.push(ev.data);
                console.log(ev.data);
            }
            stop.addEventListener('mouseup', function (ev) {
                recorder.stop();
                e.target.src = voice_black;
                //console.log(recorder.state);
            })

            recorder.onstop = function (ev) {

                // blob of type mp3

                console.log(dataArray, "stop");
                // After fill up the chunk
                // array make it empty
                let audioData = new Blob(dataArray,
                    { 'type': 'audio/mp3;' });

                // After fill up the chunk
                // array make it empty
                dataArray = [];

                // Creating audio url with reference
                // of created blob named 'audioData'
                let audioSrc = window.URL
                    .createObjectURL(audioData);


                // Creating audio url with reference
                // of created blob named 'audioData'

                var today = new Date();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var g = user.contacts.find(x => x.username === contact.username);
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

    const [contacts, setcontacts] = useState(user && user.contacts);

    //document.getElementsByClassName('mainChat')[0].scrollTop = document.getElementsByClassName('mainChat')[0].scrollHeight;
    console.log(contacts);
    const changeChat = (contact) => {
        user.contacts.map((e) => {
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
            var g = user.contacts.find(x => x.username === contact.username);
            g.mem = g.mem.concat({ sent: true, message: e.target.value , time: time});
            g.last=({time:time,message:e.target.value});
            message.value = '';
        }
        //button
        else if (e.target.tagName.toLowerCase() == 'button' && message.value !== '') {
            newMess = messages.concat([{ sent: true, message: message.value , time: time }]);
            setMess(newMess);
            const g = user.contacts.find(x => x.username === contact.username);
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
        user.contacts.forEach((i) => {
            if (username == i.username) {
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
        setcontacts(contacts.concat([{ username: username, mem: [], last: null }]))

    }

    const sendTextFile = (textFile) => {
        if (textFile !== undefined) {
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var g = user.contacts.find(x => {
                return x.username === contact.username
            });
            g.mem = g.mem.concat({
                sent: true, message: <a href={URL.createObjectURL(textFile)} download>
                    <img width="100" src={filedownload}>
                    </img>{textFile.name}</a>, time: time
            });
            g.last = ({ time: time, message: "Text File" });
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
            console.log(video.src)
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var g = user.contacts.find(x => {
                return x.username === contact.username
            });
            g.mem = g.mem.concat({
                sent: true, message: <video width="250" src={URL.createObjectURL(video)} controls >
                    
                </video >, time: time
            });
            g.last = ({ time: time, message: "Video File" });
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
            var g = user.contacts.find(x => {
                console.log(contact, x);
                return x.username === contact.username
            });
            g.mem = g.mem.concat({
                sent: true, message: <a href={URL.createObjectURL(image)} download>
                    <img width="100" src={URL.createObjectURL(image)}>
                    </img>{image.name}
                </a>, time: time
            });
            g.last = ({ time: time, message: "Image File" });
            var newMess = messages.concat([{
                sent: true, message: <a href={URL.createObjectURL(image)} download>
                    <img width="100" src={URL.createObjectURL(image)}>
                    </img>{image.name}
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
            {user && < Contacts user={user} contacts={user.contacts} users={users} addFriend={addFriend} changeChat={changeChat} /> }

            <div className="mainChat">
                <Messages messages={messages} img={user && user.image} />
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