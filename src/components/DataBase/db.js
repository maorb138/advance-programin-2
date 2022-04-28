import DefaultImage from './../Image/profile-picture-boy-1.jpeg';
import avtar1 from './../Image/profile-picture-boy-2.jpeg';
import avtar2 from './../Image/profile-picture-boy-3.jpeg';
import avatar3 from'./../Image/profile-picture-girl-2.jpeg';
import avatar4 from './../Image/profile-picture-girl-1.jpeg';
import avatar5 from './../Image/profile-picture-girl-3.jpeg';
import avatar6 from './../Image/profile-picture-girl-4.jpeg';
import Message from '../ChatPage/Message/Message';
const users = [{ username: 'avi', nickname: 'avi1', password: '1234', image: DefaultImage, contacts: [{ username: 'avi2', mem:[],last:null }, { username: 'daniel', mem:[],last:null }, {username: 'aviv', mem:[],last:null }]},
    { username: 'avi1', nickname: 'avi1', password: '0000', image: avtar1, contacts: [{ username: 'miri', mem:[],last:null}, { username: 'maor', mem:[],last:null}, { username: 'aviv', mem:[],last:null }]},
    { username: 'avi2', nickname: 'avi2', password: '1212', image: avtar2, contacts: [ { username: 'avi1', mem:[],last:null }, { username: 'aviv', mem:[],last:null}]},
    { username: 'aviv', nickname: 'aviv123', password: 'Ma1234567', image: avatar3, contacts: [{ username: 'avi2', mem:[],last:null }, { username: 'avi1', mem:[],last:null}]},
    { username: 'maor', nickname: 'biton', password: 'Ma1234567', image: DefaultImage, contacts: [{ username: 'yarden', mem:[],last:null }, { username: 'miri', mem:[],last:null }, { username: 'aviv', mem:[],last:null }]},
    { username: 'yarden', nickname: 'yarden123', password: 'Yarden123', image: avatar4, contacts: [{ username: 'daniel', mem:[],last:null }, { username: 'yarden', mem:[],last:null}]},
    { username: 'daniel', nickname: 'daniel123', password: 'Daniel123', image: avatar5, contacts: [{ username: 'avi2', mem:[],last:null }, { username: 'avi1', mem:[],last:null}]},
    { username: 'miri', nickname: 'miri12', password: 'Miri12', image: avatar6, contacts: [{ username: 'daniel', mem:[],last:null }, { username: 'yarden', mem:[],last:null}]},
    { username: 'elad', nickname: 'elad123', password: 'Elad123456', image: avtar1, contacts: [{ username: 'avi2', mem:[],last:null }, { username: 'daniel', mem:[],last:null }, {username: 'aviv', mem:[],last:null }]}




]
    
export default users;


