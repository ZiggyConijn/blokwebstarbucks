// JavaScript Document
console.log("hi");

var dropdown = document.querySelector('.dropdown');
var dropbtn = document.querySelector('.dropbtn');
var dropdowntwo = document.querySelector('.dropdowntwo');
var dropbtntwo = document.querySelector('.dropbtntwo');
var dropdowncontent = document.querySelector('.dropdown-content');
var dropdowntwocontent = document.querySelector('.dropdowntwo-content');
var dropdownthree = document.querySelector('.dropdownthree');
var dropbtnthree = document.querySelector('.dropbtnthree');
var dropdownthreecontent = document.querySelector('.dropdownthree-content');
var dropdownfour = document.querySelector('.dropdownfour');
var dropbtnfour = document.querySelector('.dropbtnfour');
var dropdownfourcontent = document.querySelector('.dropdownfour-content');
var dropdownfive = document.querySelector('.dropdownfive');
var dropbtnfive = document.querySelector('.dropbtnfive');
var dropdownfivecontent = document.querySelector('.dropdownfive-content');

var menuButton = document.querySelector('header nav ul li:nth-of-type(2) img')
var menuNav = document.querySelector('header > section:nth-of-type(1)')

var hollowheart = document.querySelector('.hollowHeart');
var redheart = document.querySelector('.redHeart');
var supportBtn = document.querySelector('.microAnimatie button');

//var myDropdown = document.querySelector('.myDropdown');



/*
function myFunction()  {
    console.log('dropdown box werkt')
    dropdowncontent.classList.add("show");
   
}
*/

/*
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  */

dropbtn.addEventListener('click', function () {
  console.log('dropdown one werkt')
  dropdowncontent.classList.toggle('show')

}

);


dropbtntwo.addEventListener('click', function () {
  console.log('dropdown two werkt')
  dropdowntwocontent.classList.toggle('show')

}

);

dropbtnthree.addEventListener('click', function () {
  console.log('dropdown three werkt')
  dropdownthreecontent.classList.toggle('show')

}

);

dropbtnfour.addEventListener('click', function () {
  console.log('dropdown four werkt')
  dropdownfourcontent.classList.toggle('show')

}

);

dropbtnfive.addEventListener('click', function () {
  console.log('dropdown five werkt')
  dropdownfivecontent.classList.toggle('show')

}

);

menuButton.onclick = toggleMenu;

function toggleMenu() {
  console.log('hamburger werkt')
  menuNav.classList.toggle('toggleMenu')
}



supportBtn.addEventListener('click', function () {
  console.log('ukraine supported')
  redheart.classList.toggle('add')
  hollowheart.classList.toggle('remove')
}

);


