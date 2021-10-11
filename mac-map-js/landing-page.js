let toggleNavStatus = false;

// making menu bar to work
let toggleNav = function(){
    var getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUL = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarlinks = document.querySelectorAll(".nav-sidebar a");

    if(toggleNavStatus === false){
        getSidebarUL.style.visibility = "visible";
        getSidebar.style.width = "215px";
        getSidebarTitle.style.opaciity = "0.5";

        // array where links for menu are store
        let arrayLenght = getSidebarlinks.length;
        for (let index = 0; index < arrayLenght; index++) {
            getSidebarlinks[index].style.opaciity = "1";   
        }
        toggleNavStatus = true;
    }
    

    else if (toggleNavStatus === true){
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opaciity = "0";

        // array where links for menu are store
        let arrayLenght = getSidebarlinks.length;
        for (let index = 0; index < arrayLenght; index++) {
            getSidebarlinks[index].style.opaciity = "0";   
        }

        getSidebarUL.style.visibility = "hidden";
        toggleNavStatus = false;
    }


}