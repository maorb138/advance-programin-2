import DefaultImage from './../Image/profile-picture-boy-1.jpeg';
import avtar1 from './../Image/profile-picture-boy-2.jpeg';
import avtar2 from './../Image/profile-picture-boy-3.jpeg';

const users = [{ username: 'avi', nickname: 'avi1', password: '1234', image: DefaultImage, contacts: [{ username: 'avi2', mem: [] }, { username: 'avi1', mem:[] }, {username: 'a', mem:[] }]},
    { username: 'avi1', nickname: 'avi1', password: '0000', image: avtar1, contacts: [{ username: 'avi2', mem:[]}, { username: 'maor', mem:[]}, { username: 'a', mem:[] }]},
    { username: 'avi2', nickname: 'avi2', password: '1212', image: avtar2, contacts: [ { username: 'avi1', mem:[] }, { username: 'a', mem:[]}]},
    { username: 'a', nickname: 'a', password: 'Ma1234567', image: avtar1, contacts: [{ username: 'avi2', mem:[] }, { username: 'avi1', mem:[]}]},
    { username: 'maor', nickname: 'biton', password: 'Ma1234567', image: DefaultImage, contacts: [{ username: 'avi2', mem:[] }, { username: 'avi1', mem:[] }, { username: 'a', mem:[] }]}]
    
export default users;


