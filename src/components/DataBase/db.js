import DefaultImage from './../Image/profile-picture-boy-1.jpeg';
import avtar1 from './../Image/profile-picture-boy-2.jpeg';
import avtar2 from './../Image/profile-picture-boy-3.jpeg';

const users = [{ username: 'avi', nickname: 'avi1', password: '1234', image: DefaultImage, contacts: [{ username: 'avi2', mem: [], image: avtar1 }, { username: 'avi1', mem:[], image: avtar1 }, {username: 'a', mem:[], image: avtar2 }]},
    { username: 'avi1', nickname: 'avi1', password: '0000', image: avtar1, contacts: [{ username: 'avi2', mem:[], image: avtar1 }, { username: 'maor', mem:[], image: avtar1 }, { username: 'a', mem:[], image: avtar2 }]},
    { username: 'avi2', nickname: 'avi2', password: '1212', image: DefaultImage, contacts: [ { username: 'avi1', mem:[], image: avtar2 }, { username: 'a', mem:[], image: avtar2 }]},
    { username: 'a', nickname: 'a', password: 'Ma1234567', image: DefaultImage, contacts: [{ username: 'avi2', mem:[] , image: DefaultImage}, { username: 'avi1', mem:[] , image: DefaultImage}]},
    { username: 'maor', nickname: 'biton', password: 'Ma1234567', image: DefaultImage, contacts: [{ username: 'avi2', mem:[], image: DefaultImage }, { username: 'avi1', mem:[], image: avtar1 }, { username: 'a', mem:[], image: avtar2 }]}]
    
export default users;


