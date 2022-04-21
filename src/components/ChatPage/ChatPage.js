
import './ChatPage.css';
import users from '../DataBase/db';

function ChatPage() {
    
    return (
        <div className="chat1">
            <nav>
                <div className="hello nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">Home</div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">Profile</div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Contact</div>
            </div>
            hello world;
        </div>
        );

// function print(){
//     for (let index = 0; index < users.length; index++) {
//         const element = users[index].image;
//         const element1 = users[index].nickname;
//         const element2 = users[index].password;
//         const element3 = users[index].username;
//         console.log(element);
//         console.log(element1);
//         console.log(element2);
//         console.log(element3);
        
        
//     }
// }

}

export default ChatPage;