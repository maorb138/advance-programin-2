import DefaultImage from './../Image/profile-picture-boy-1.jpeg';
import avtar1 from './../Image/profile-picture-boy-2.jpeg';
import avtar2 from './../Image/profile-picture-boy-3.jpeg';
import avatar3 from'./../Image/profile-picture-girl-2.jpeg';
const users = [{ username: 'avi', nickname: 'avi1', password: '1234', image: DefaultImage, contacts: [{ username: 'avi2', mem:[],last:null }, { username: 'avi1', mem:[],last:null }, {username: 'a', mem:[],last:null }]},
    { username: 'avi1', nickname: 'avi1', password: '0000', image: avtar1, contacts: [{ username: 'avi2', mem:[],last:null}, { username: 'maor', mem:[],last:null}, { username: 'a', mem:[],last:null }]},
    { username: 'avi2', nickname: 'avi2', password: '1212', image: avtar2, contacts: [ { username: 'avi1', mem:[],last:null }, { username: 'a', mem:[],last:null}]},
    { username: 'a', nickname: 'a', password: 'Ma1234567', image: avatar3, contacts: [{ username: 'avi2', mem:[],last:null }, { username: 'avi1', mem:[],last:null}]},
    { username: 'maor', nickname: 'biton', password: 'Ma1234567', image: DefaultImage, contacts: [{ username: 'avi2', mem:[],last:null }, { username: 'avi1', mem:[],last:null }, { username: 'a', mem:[],last:null }]}]
    
export default users;


