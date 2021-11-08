const btn = document.querySelector("button"); // Get the button from the page
const input = document.querySelector("Room");
// Detect clicks on the button

libraryImages = ["https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryLower.png?v=1632164280262", "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor1.png?v=1632164257605", "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor2.png?v=1632164261836", "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor3.png?v=1632164271313", "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor4.png?v=1632164275904"];
olinRiceImages = ["https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceFirstFloor.png?v=1633620660885", "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceSecondFloor.png?v=1633620666941", "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceThirdFloor.png?v=1633620670465", "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceFourthFloor.png?v=1633620674438"];
carnegieImages = ["https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieBasement.png?v=1632508341217","https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieFirstFloor.png?v=1632508341147", "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieSecondFloor.png?v=1632508341232",  "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieThirdFloor.png?v=1632508341042", "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieFourthFloor.png?v=1632508341282"];
humanitiesImages = ["https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities1stFloor.png?v=1633620425247", "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities2ndfloor.png?v=1633620429481", "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities3rdfloor.png?v=1633620433471", "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities4thfloor.png?v=1633620437421"]; 
var roomNumber;



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

// context.clearRect(0, 0, 800, 800);

function render() {
  //draw background image
  ctx.drawImage(x, 200, 200);

  // highlight section
  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = "yellow";
  ctx.fillRect(300, 300, 100, 100);
  ctx.restore();
  context.clearRect(0, 0, 800, 800);
}

function render2() {
  ctx.drawImage(x, 200, 200);
  ctx.beginPath() // cordinates generated from https://www.image-map.net/ 
  ctx.moveTo(329,44)
  ctx.lineTo(361,45)
  ctx.lineTo(360,131)
  ctx.lineTo(327,130)
  ctx.closePath();
  ctx.strokeStyle = 'yellow'
  ctx.stroke()

}

function testCanvas() {
  ctx.fillRect(300, 300, 100, 100);
}