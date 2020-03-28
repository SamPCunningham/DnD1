const enterWep = document.querySelector(".wep-sub");
var wepList = document.querySelector(".wep-space");

var WEAPONS = [];

function addName() {
    var name = document.getElementById("wep-name").value;
    WEAPONS.push(name);
    console.log(WEAPONS);
    wepList.innerHTML = WEAPONS.join(" ");
};



enterWep.addEventListener("click", addName);
