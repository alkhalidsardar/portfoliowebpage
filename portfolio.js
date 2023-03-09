var tabtitlesvariable = document.getElementsByClassName('tabtitles');
var tabcontentvariable = document.getElementsByClassName('tabcontent');

/* creating function */
function opentab(tabname){
for(tabtitles of tabtitlesvariable) {
    tabtitles.classList.remove("activelinks");  
}
for(tabcontent of tabcontentvariable) {
    tabcontent.classList.remove("activetab");  
}

document.getElementById(tabname).classList.add("activetab");
}

/*------------------------------------------------------navbar------------------------------------------------ -*/
var navicons = document.getElementById("navicons");
function showMenu() {
navicons.style.right = "0";
}
function hideMenu() {
navicons.style.right = "-200px";
}


