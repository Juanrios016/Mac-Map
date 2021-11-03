/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/

const btn = document.querySelector("button"); // Get the button from the page
const input = document.querySelector("Room");
// Detect clicks on the button

var roomNumber;

function changeImageGG() {
  var img = document.getElementById("image");
  var e1 = document.getElementById("build").value;
  if (e1 == "carn") {
    var img = document.getElementById("image");
    img.src =
      "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieFirstFloor.png?v=1632508341147";
    return false;
  }
  if (e1 == "library") {
    img.src =
      "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor1.png?v=1632164257605";
    return false;
  }
  
  if (e1 == "hum") {
    var img = document.getElementById("image");
    img.src = "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities1stFloor.png?v=1633620425247"
    return false;
  }
  if (e1 == "orl") {
    var img = document.getElementById("image");
    img.src = "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceFirstFloor.png?v=1633620660885"
    return false;
  }
}

function changeImageLL() {
  var img = document.getElementById("image");
  var drop = document.getElementById("myDropdown");
  var e1 = document.getElementById("build").value;
  if (e1 == "carn") {
    var img = document.getElementById("image");
    img.src =
      "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieBasement.png?v=1632508341217";
    return false;
  }
  if (e1 == "library") {
    img.src =
      "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryLower.png?v=1632164280262";
    return false;
  }
}

function changeImage2L() {
  var img = document.getElementById("image");
  var e1 = document.getElementById("build").value;
  if (e1 == "carn") {
    var img = document.getElementById("image");
    img.src =
      "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieSecondFloor.png?v=1632508341232";
    return false;
  }
  if (e1 == "library") {
    img.src =
      "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor2.png?v=1632164261836";
    return false;
  }
  if (e1 == "hum") {
    var img = document.getElementById("image");
    img.src = "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities2ndfloor.png?v=1633620429481"
    return false;
  }
  if (e1 == "orl") {
    var img = document.getElementById("image");
    img.src = "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceSecondFloor.png?v=1633620666941"
    return false;
  }
}

function changeImage3L() {
  var img = document.getElementById("image");
  var e1 = document.getElementById("build").value;
  if (e1 == "carn") {
    var img = document.getElementById("image");
    img.src =
      "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieThirdFloor.png?v=1632508341042";
    return false;
  }
  if (e1 == "library") {
    var img = document.getElementById("image");
    img.src =
      "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor3.png?v=1632164271313";
    return false;
  }
  if (e1 == "hum") {
    var img = document.getElementById("image");
    img.src = "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities3rdfloor.png?v=1633620433471"
    return false;
  }
  if (e1 == "orl") {
    var img = document.getElementById("image");
    img.src = "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceThirdFloor.png?v=1633620670465"
    return false;
  }
}

function changeImage4L() {
  var img = document.getElementById("image");
  var e1 = document.getElementById("build").value;
  if (e1 == "carn") {
    var img = document.getElementById("image");
    img.src =
      "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieFourthFloor.png?v=1632508341282";
    return false;
  }
  if (e1 == "library") {
    var img = document.getElementById("image");
    img.src =
      "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryFloor4.png?v=1632164275904";
    return false;
  }
  if (e1 == "hum") {
    var img = document.getElementById("image");
    img.src = "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities4thfloor.png?v=1633620437421"
    return false;
  }
  if (e1 == "orl") {
    var img = document.getElementById("image");
    img.src = "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceFourthFloor.png?v=1633620674438"
    return false;
  }
}

function getRoomNumber() {
  roomNumber = document.getElementById("InputRoom").value;
  document.getElementById("roomDisplay").innerHTML = roomNumber;
}

function cleanUpString(number) {}

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
    var img = document.getElementById("image");
    img.src =
      "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FCarnegieBasement.png?v=1632508341217";
    return false;
  }
  if (e == "library") {
    var img = document.getElementById("image");
    img.src =
      "https://cdn.glitch.com/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FLibraryLower.png?v=1632164280262";
    return false;
  }
  if (e == "hum") {
    var img = document.getElementById("image");
    img.src = "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FHumanities1stFloor.png?v=1633620425247"
    return false;
  }
  if (e == "orl") {
    var img = document.getElementById("image");
    img.src = "https://cdn.glitch.me/dd9514b9-20ff-4bc5-b6b3-d7a1630812d3%2FOlinRiceFirstFloor.png?v=1633620660885"
    return false;
  }
}

// canvas api
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

// Loads image onto the canvas 
var img = new Image();   // Create new img element
img.onload = render2;
img.src = '/images/CarnegieFirstFloor.png'; // Set source path

function render() {
  //draw background image
  ctx.drawImage(img, 200, 200);

  // highlight section
  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = "yellow";
  ctx.fillRect(300, 300, 100, 100);
  ctx.restore();
}
function render2() {
  ctx.drawImage(img, 0, 0);
  ctx.beginPath() // cordinates generated from https://www.image-map.net/ 
  ctx.moveTo(329,44)
  ctx.lineTo(361,45)
  ctx.lineTo(360,131)
  ctx.lineTo(327,130)
  ctx.closePath();
  ctx.strokeStyle = 'yellow'
  ctx.stroke()

}