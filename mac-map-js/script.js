const btn = document.querySelector("button"); // Get the button from the page
const input = document.querySelector("Room");
// Detect clicks on the button

var roomNumber;
var floorNumber; 
var currentImageX;
var currentImageY;
  
function changeImage1L() {
  var e1 = document.getElementById("build").value;
  if (e1 == "carn") {
      loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieFirstFloor.png?v=1632508341147");
      floorNumber = 1;
  }
  if (e1 == "library") {
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
  x.onload = render;
  x.src = link; // Set source path
  // currentImageX = x.height;
  // currentImageY = x.height;
  // alert(x.height);
  // alert(x.width);
} 

function render() {
  ctx.drawImage(x, 0, 0);
}

// Function to find the room and its cordinates from the list of possible cordinates provided
function findRoom(list, search) {
  let check = true;
  for(let index = 0; index < list.length; ++index) {  //loops through all the rooms and checks the name to see if it is correct
    if (list[index].name == search) {
      if(list[index].type == "rect") {
        drawRectangle(list[index]); 
        check = false;
      }
      else {
        drawPolygon(list[index]);
        check = false;
      }
      
      
    }
  }
  if (check) {
    alert('Room Not Found');
  }
}

function drawRectangle(room) { 
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.stroke();
  render(); // Redraws the image so we don't highlight multiple rooms.
  ctx.beginPath();
  ctx.lineWidth = "6";
  ctx.strokeStyle = "yellow";
  ctx.rect(room.cords[0][0], room.cords[0][1], room.cords[1][0]-room.cords[0][0], room.cords[1][1]-room.cords[0][1]);
  ctx.stroke();
}

function drawPolygon(room) { 
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.stroke();
  render(); // Redraws the image so we don't highlight multiple rooms.
  let cordinates = room.cords;
  ctx.beginPath();
  ctx.lineWidth = "6";
  ctx.strokeStyle = "yellow";
  ctx.moveTo(cordinates[0][0], cordinates[0][1]);
  for(let index = 0; index < cordinates.length; ++index) { 
    ctx.lineTo(cordinates[index][0], cordinates[index][1]);
  }
  ctx.lineTo(cordinates[0][0], cordinates[0][1]);
  ctx.stroke();

}

// Function that is run by clicking the submit button
function begin() { 
  let building = document.getElementById("build").value;
  let search = document.getElementById("textbox").value;
  search = cleanString(search);
  if(search.charAt(0) == floorNumber) { // Checks to see if the room is on the same floor as the one being displayed. 
    if (building == "carn") {
      findRoom(carnegie, search); 
    }
    if (building == "library") {
      alert("We have not implemented this building yet");

    }
    if (building == "hum") {
      findRoom(humanities, search); 

    }
    if (building == "orl") {
      alert("We have not implemented this building yet");

    }
}
else {
  alert("Room is not on this floor");
}

function cleanString(string) {
  var cleanedString = string.replace(/ /g, ""); // uses regular expression to get rid of all white space
  cleanedString = cleanedString.toUpperCase(); // to upper case 
  return cleanedString;
}

function resize(building) {
  //find origional size of image
  //find current size of image 
  // return current/origional 
  var origionalCords = [0,0]; 
  if (building == "carn") {
    origionalCords = carnegieOrigionalCords[floorNumber];
  }
  if (building == "library") {
    alert("We have not implemented this building yet");
  }
  if (building == "hum") {
    origionalCords = humanitiesOrigionalCords[floorNumber];
  }
  if (building == "orl") {
    alert("We have not implemented this building yet");
    //origionalCords = olinriceOrigionalCords[floorNumber]
  }
}

var carnegieOrigionalCords = [[732,420],[678,415],[710,437],[697,398],[676,404]];
var humanitiesOrigionalCords = [[0,0],[540,403],[713,378],[575,415],[539,391]];
var olinriceOrigionalCords =[[0,0],[683,367],[665,386],[644,360],[669,374]];



}


