const btn = document.querySelector("button"); // Get the button from the page
const input = document.querySelector("Room");
// Detect clicks on the button

libraryImages = ["https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryLower.png?v=1632164280262", "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor1.png?v=1632164257605", "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor2.png?v=1632164261836", "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor3.png?v=1632164271313", "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor4.png?v=1632164275904"];
olinRiceImages = ["https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceFirstFloor.png?v=1633620660885", "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceSecondFloor.png?v=1633620666941", "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceThirdFloor.png?v=1633620670465", "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceFourthFloor.png?v=1633620674438"];
carnegieImages = ["https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieBasement.png?v=1632508341217","https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieFirstFloor.png?v=1632508341147", "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieSecondFloor.png?v=1632508341232",  "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieThirdFloor.png?v=1632508341042", "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieFourthFloor.png?v=1632508341282"];
humanitiesImages = ["https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities1stFloor.png?v=1633620425247", "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities2ndfloor.png?v=1633620429481", "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities3rdfloor.png?v=1633620433471", "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities4thfloor.png?v=1633620437421"]; 
var roomNumber;

var carnegie = [ // temporary fix until I can acces variables from other file 
  { name: "04", type: "rect", cords: [[248,235],[187,87]]},
  { name: "04E", type: "rect", cords: [[130,35],[198,79]]},
  { name: "04F", type: "rect", cords: [[207,35],[243,76]]},
  { name: "04D", type: "rect", cords: [[129,87],[180,133]]},
  { name: "04C", type: "rect", cords: [[128,146],[181,195]]},
  { name: "04H", type: "rect", cords: [[261,41],[293,82]]},
  { name: "04A", type: "rect", cords: [[256,217],[335,278]]},
  { name: "04G", type: "rect", cords: [[257,92],[357,130]]},
  { name: "041", type: "rect", cords: [[300,41],[353,80]]},
  { name: "03", type: "rect", cords: [[260,186],[291,208]]},
  { name: "09", type: "rect", cords: [[343,226],[416,275]]},
  { name: "01", type: "rect", cords: [[363,39],[395,91]]},
  { name: "05", type: "rect", cords: [[402,40],[500,128]]},
  { name: "06", type: "rect", cords: [[511,36],[627,179]]},
  { name: "06B", type: "rect", cords: [[514,185],[628,281]]},
  { name: "07B", type: "rect", cords: [[469,184],[503,273]]},
  { name: "07A", type: "rect", cords: [[428,189],[460,270]]},
  { name: "02", type: "rect", cords: [[359,100],[396,168]]},
  { name: "04B", type: "poly", cords: [[130,203],[183,204],[182,239],[248,240],[248,282],[130,282]]},
  { name: "304", type: "rect", cords:[[120,146],[235,269]]},
  { name: "305", type: "rect", cords:[[121,24],[237,144]]},
  { name: "306", type: "rect", cords:[[251,28],[303,102]]},
  { name: "307", type: "rect", cords:[[279,103],[305,120]]},
  { name: "303", type: "rect", cords:[[243,197],[319,262]]},
  { name: "302", type: "rect", cords:[[254,173],[281,193]]},
  { name: "308", type: "rect", cords:[[307,30],[345,119]]},
  { name: "309", type: "rect", cords:[[347,27],[486,121]]},
  { name: "309A", type: "poly", cords:[[64,57],[464,41],[485,42],[483,59]]},
  { name: "310A", type: "rect", cords:[[489,24],[531,86]]},
  { name: "310B", type: "rect", cords:[[535,24],[606,69]]},
  { name: "310C", type: "rect", cords:[[555,75],[602,113]]},
  { name: "310D", type: "rect", cords:[[556,123],[603,158]]},
  { name: "310E", type: "rect", cords:[[555,172],[603,212]]},
  { name: "310F", type: "rect", cords:[[537,215],[605,265]]},
  { name: "310G", type: "rect", cords:[[490,219],[530,264]]},
  { name: "310", type: "rect", cords:[[490,90],[549,211]]},
  { name: "403", type: "rect", coords=[[233,167],[261,197]]},
  { name: "404", type: "rect", coords=[[101,115],[219,205]]},
  { name: "404A", type: "rect", coords=[[102,208],[216,268]]},
  { name: "404B", type: "rect", coords=[[101,26],[221,111]]},
  { name: "405", type: "rect", coords=[[234,71],[318,127]]},
  { name: "407", type: "rect", coords=[[323,71],[363,126]]},
  { name: "407A", type: "rect", coords=[[224,31],[464,66]]},
  { name: "409", type: "rect", coords=[[369,71],[451,127]]},
  { name: "410A", type: "poly", coords=[[471,27],[469,71],[456,69],[456,110],[584,111],[585,25]],},
  { name: "410", type: "rect", coords=[[505,114],[584,163]]},
  { name: "401", type: "rect", coords=[[463,112],[504,165]]},
  { name: "412", type: "rect", coords=[[463,169],[488,202]]},
  { name: "413", type: "rect", coords=[[380,167],[462,205]]},
  { name: "413A", type: "rect", coords=[[386,231],[462,266]]},
  { name: "411A", type: "rect", coords=[[470,234],[585,270]]},
  { name: "411B", type: "rect", coords=[[466,207],[476,229]]},
  { name: "411", type: "ploy", coords=[[492,167],[490,203],[478,207],[478,228],[587,230],[582,168]]}
  ];

  
function changeImage1L() {
  var e1 = document.getElementById("build").value;
  if (e1 == "carn") {
      loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieFirstFloor.png?v=1632508341147");
  }
  if (e1 == "library") {
    // render;
    loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor1.png?v=1632164257605");
    return false;
  }
  
  if (e1 == "hum") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities1stFloor.png?v=1633620425247");
    return false;
  }
  if (e1 == "orl") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceFirstFloor.png?v=1633620660885");
    return false;
  }
}

function changeImageLL() {
  var e1 = document.getElementById("build").value;
  if (e1 == "carn") {
    loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieBasement.png?v=1632508341217");
  }
  if (e1 == "library") {
    loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryLower.png?v=1632164280262");
  }
}

function changeImage2L() {
  var e1 = document.getElementById("build").value;
  if (e1 == "carn") {
    loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieSecondFloor.png?v=1632508341232");
    
  }
  if (e1 == "library") {
    loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor2.png?v=1632164261836");
  }
  if (e1 == "hum") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities2ndfloor.png?v=1633620429481");
  }
  if (e1 == "orl") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceSecondFloor.png?v=1633620666941");
  }
}

function changeImage3L() {
  var e1 = document.getElementById("build").value;
  if (e1 == "carn") {
  loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieThirdFloor.png?v=1632508341042");
  }
  if (e1 == "library") {
    loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor3.png?v=1632164271313");
  }
  if (e1 == "hum") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities3rdfloor.png?v=1633620433471");
  }
  if (e1 == "orl") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceThirdFloor.png?v=1633620670465");
  }
}

function changeImage4L() {
  var e1 = document.getElementById("build").value;
  if (e1 == "carn") {
      loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieFourthFloor.png?v=1632508341282");
  }
  if (e1 == "library") {
      loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor4.png?v=1632164275904");
  }
  if (e1 == "hum") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities4thfloor.png?v=1633620437421");
  }
  if (e1 == "orl") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceFourthFloor.png?v=1633620674438");
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

function buildingChange() {
  var e = document.getElementById("build").value;
  if (e == "carn") {
      loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieBasement.png?v=1632508341217");
    return false;
  }
  if (e == "library") {
    loadImage("https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryLower.png?v=1632164280262");
  }
  if (e == "hum") {
    loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities1stFloor.png?v=1633620425247");

  }
  if (e == "orl") {
  loadImage("https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceFirstFloor.png?v=1633620660885");
  }
}

// canvas api
const canvas = document.getElementById("searchCanvas");
const ctx = canvas.getContext('2d');
var x = new Image();   // Create new img elementoad

function loadImage(link) {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  x.onload = render2;
  x.src = link; // Set source path
} 

function render() {
  //draw background image
  ctx.drawImage(x, 0, 0);

  // highlight section
  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = "yellow";
  ctx.fillRect(300, 300, 100, 100);
  ctx.restore();
  context.clearRect(0, 0, 800, 800);
}

function render2() {
  ctx.drawImage(x, 0, 0);
}

function testCanvas() {
  ctx.fillRect(300, 300, 100, 100);
}

function findRoom(list, room) {
  let check = true;
  for(let index = 0; index < list.length; ++index) { // right now assumes all rooms are rectangles, got to fix that. 
    if (list[index].name == room) {
      drawRectangle(list[index]);
      check = false;
    }
  }
  if (check) {
    alert('Room Not Found');
  }
}

function drawRectangle(room) { // might want to redraw the image or have some way of clearing the rectangle. 
ctx.fillRect(room.cords[0][0], room.cords[0][1], room.cords[1][0]-room.cords[0][0], room.cords[1][1]-room.cords[0][1]);
}

function begin() { // need to have a way to change the floor of the building based on the cordinate or have some sort of check for that 
  let building = document.getElementById("build").value;
  let room = document.getElementById("textbox").value;
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


