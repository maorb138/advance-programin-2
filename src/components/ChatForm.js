import './ChatForm.css'

function ChatForm(){

    return(
      <div id="container">
      <aside>
      <header>
      <h3>Welcome back!</h3>
  
      <input type="text" id="myInput"  onKeyUp={SearchName} placeholder="Search.." title="Type in a name"/>

      <ul id="myUL">
      <li><a href="#">Adele</a></li>
      <li><a href="#">Agnes</a></li>
      
      <li><a href="#">Billy</a></li>
      <li><a href="#">Bob</a></li>
      
      <li><a href="#">Calvin</a></li>
      <li><a href="#">Christina</a></li>
      <li><a href="#">Cindy</a></li>
      </ul>
      </header>
      <ul>
      </ul>
      </aside>
 
      
      
      
      </div>
  
    );
}
function SearchName(){
  const registerValid = () => {
    let list = document.getElementById("myUL");
  }
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
  


}

export default ChatForm;