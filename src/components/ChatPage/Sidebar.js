import './Sidebar.css'
import './PopupImg.css'
import Avatar from './../Image/profile-picture-boy-2.jpeg';
import dot from "./../Image/3dot.jpg";
function Sidebar(){
const Sidebar = () =>{
  

}
    
return(
  <div className="sidebar">
  <header className="first-row">
  <div>
  <img id="myImg" className='myImg' onClick={PopupImg} src={Avatar} />
  <div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01"/>
  <div id="caption"></div>
</div>
  </div>

 
  
  
  
  </header>
  
  
  </div>
);







}




function PopupImg(){
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }

}

export default Sidebar;