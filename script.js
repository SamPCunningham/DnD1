const enterWep = document.querySelector(".wep-sub");
var wepList = document.querySelector(".wep-space");

var WEAPONS = [];

// created object to be listed in array above
function Weapon(name,type,cost,damage) {
    this.name = name;
    this.type = type;
    this.cost = cost;
    this.damage = damage;
};

// pulling out elements by id, can't get query selector to 
// pull the value for some reason so currently using getElement
function addName() {
    var name = document.getElementById("wep-name").value;
    var type = document.getElementById("wep-type").value;
    var cost = document.getElementById("wep-cost").value;
    var dam = document.getElementById("wep-damage").value;

    var weapon = new Weapon(name, type, cost, dam);
    WEAPONS.push(weapon);
    console.log(WEAPONS);
    wepList.innerHTML = WEAPONS.join(" ");
};
// this is showing up in browser as [object, Object]
// I think I need to write a separate function that takes 
// the properties of my object and passes them back to html as string
// I'm thinking a for loop of the array that will create a string 
// of text using my object and return each part of the oject's name.


enterWep.addEventListener("click", addName);
