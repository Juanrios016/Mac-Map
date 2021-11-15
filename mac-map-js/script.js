const btn = document.querySelector("button"); // Get the button from the page
const input = document.querySelector("Room");
// Detect clicks on the button

var roomNumber;
var floorNumber; 
  
function changeImage1L() {
  var e1 = document.getElementById("build").value;
  if (e1 == "carn") {
      loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieFirstFloor.png?v=1632508341147");
      floorNumber = 1;
  }
  if (e1 == "library") {
    // render;
    loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor1.png?v=1632164257605");
    floorNumber = 1;
  }
  
  if (e1 == "hum") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities1stFloor.png?v=1633620425247");
    floorNumber = 1;
  }
  if (e1 == "orl") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceFirstFloor.png?v=1633620660885");
    floorNumber = 1;
  }
}

function changeImageLL() {
  var e1 = document.getElementById("build").value;
  if (e1 == "carn") {
    loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieBasement.png?v=1632508341217");
    floorNumber = 0;
  }
  if (e1 == "library") {
    loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryLower.png?v=1632164280262");
    floorNumber = 0;
  }
}

function changeImage2L() {
  var e1 = document.getElementById("build").value;
  if (e1 == "carn") {
    loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieSecondFloor.png?v=1632508341232");
    floorNumber = 2;
  }
  if (e1 == "library") {
    loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor2.png?v=1632164261836");
    floorNumber = 2;
  }
  if (e1 == "hum") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities2ndfloor.png?v=1633620429481");
    floorNumber = 2;
  }
  if (e1 == "orl") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceSecondFloor.png?v=1633620666941");
    floorNumber = 2;
  }
}

function changeImage3L() {
  var e1 = document.getElementById("build").value;
  if (e1 == "carn") {
  loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieThirdFloor.png?v=1632508341042");
  floorNumber = 3;
  }
  if (e1 == "library") {
    loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor3.png?v=1632164271313");
    floorNumber = 3;
  }
  if (e1 == "hum") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities3rdfloor.png?v=1633620433471");
    floorNumber = 3;
  }
  if (e1 == "orl") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceThirdFloor.png?v=1633620670465");
    floorNumber = 3;
  }
}

function changeImage4L() {
  var e1 = document.getElementById("build").value;

  if (e1 == "carn") {
      loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieFourthFloor.png?v=1632508341282");
      floorNumber = 4;
  }
  if (e1 == "library") {
      loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor4.png?v=1632164275904");
      floorNumber = 4;
  }
  if (e1 == "hum") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities4thfloor.png?v=1633620437421");
    floorNumber = 4;
  }
  if (e1 == "orl") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceFourthFloor.png?v=1633620674438");
    floorNumber = 4;
  }
}

function getRoomNumber() {
  roomNumber = document.getElementById("InputRoom").value;
  document.getElementById("roomDisplay").innerHTML = roomNumber;
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};


// canvas api
const canvas = document.getElementById("searchCanvas");
const ctx = canvas.getContext('2d');
var x = new Image();   // Create new img elementoad

function loadImage(link) {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  x.onload = render2;
  x.src = link; // Set source path
} 

function render2() {
  ctx.drawImage(x, 0, 0);
}

// Function to find the room and its cordinates from the list of possible cordinates provided
function findRoom(list, room) {
  let check = true;
  for(let index = 0; index < list.length; ++index) {  //loops through all the rooms and checks the name to see if it is correct
    if (list[index].name == room) {
      drawRectangle(list[index]); // right now assumes all rooms are rectangles, got to fix that.
      check = false;
    }
  }
  if (check) {
    alert('Room Not Found');
  }
}

function drawRectangle(room) { 
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.stroke();
  render2(); // Redraws the image so we don't highlight multiple rooms.
  ctx.beginPath();
  ctx.lineWidth = "6";
  ctx.strokeStyle = "yellow";
  ctx.rect(room.cords[0][0], room.cords[0][1], room.cords[1][0]-room.cords[0][0], room.cords[1][1]-room.cords[0][1]);
  ctx.stroke();
}


// Function that is run by clicking the submit button
function begin() { 
  let building = document.getElementById("build").value;
  let room = document.getElementById("textbox").value;
  if(room.charAt(0) == floorNumber) { // Checks to see if the room is on the same floor as the one being displayed. 
    if (building == "carn") {
      findRoom(carnegie, room); 
    }
    if (building == "library") {
      alert("We have not implemented this building yet");

    }
    if (building == "hum") {
      alert("We have not implemented this building yet");

    }
    if (building == "orl") {
      alert("We have not implemented this building yet");

    }
}
else {
  alert("Room is not on this floor");
}

function cleanString(string) {
  clean
}


}


