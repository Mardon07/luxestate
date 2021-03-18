let item01 = document.getElementById("item1");
let border01 = document.getElementById("border01");

let item02 = document.getElementById("item2");
let border02 = document.getElementById("border02");

let item03 = document.getElementById("item3");
let border03 = document.getElementById("border03");


item01.onmouseover = function() {
    border01.style.borderBottom = "3px solid white";
}
item01.onmouseout = function() {
    border01.style.borderBottom = "3px solid black";
}

item02.onmouseover = function() {
    border02.style.borderBottom = "3px solid white";
}
item02.onmouseout = function() {
    border02.style.borderBottom = "3px solid black";
}

item03.onmouseover = function() {
    border03.style.borderBottom = "3px solid white";
}
item03.onmouseout = function() {
    border03.style.borderBottom = "3px solid black";
}




