// Fonctionnalité 1 et 1-bis :

let footer = document.querySelector("footer");
let i = 0
footer.addEventListener('click', footerClick);

function footerClick(){
  i ++;
  console.log('clique'+i);

};

// Fonctionnalité 2 :

let burgerMenu = document.querySelector("button.navbar-toggler");


let navbarHeader = document.querySelector('#navbarHeader');

burgerMenu.addEventListener('click', burgerClick);

function burgerClick(){
  navbarHeader.classList.toggle('collapse');

}

// Fonctionnalité 3 :

let editButton1 = document.querySelector('.btn-outline-secondary');

let card1 = document.querySelector('p.card-text');

editButton1.addEventListener('click', changeColorInRed)

function changeColorInRed(){
  card1.style.color = 'red';
}

// Fonctionnalité 4 :

let editButton2 = document.querySelectorAll('.btn-outline-secondary')[1];

let card2 = document.querySelectorAll('p.card-text')[1];

editButton2.addEventListener('click', changeColorInGreen)

function changeColorInGreen(){
    if (card2.style.color === 'green'){
      card2.style.color = '';
    }
    else {
      card2.style.color = 'green';
    }
 }

 // Fonctionnalité 5 :
// let cdn = document.querySelector('link');
// let cdnLink = cdn.getAttribute('href');
// let navbar = document.querySelector('.navbar');
// console.log(navbar);
// navbar.addEventListener('dblclick', navDoubleClick);
//
//  function navDoubleClick(){
//    if (cdn.getAttribute('href') !== null) {
//      cdn.removeAttribute('href');
//    }
//
//  }
let navbarElmt = document.querySelector('header');
let mainElmt = document.querySelector('main');
let cdnElmt = document.querySelector('link');
let cdnVal = cdnElmt.getAttribute('href')

navbarElmt.addEventListener('dblclick', function() {
  if (cdnElmt.getAttribute('href') !== null) {
    cdnElmt.removeAttribute('href');
  }
});

mainElmt.addEventListener('dblclick', function() {
  if (cdnElmt.getAttribute('href') === null) {
    cdnElmt.setAttribute('href', cdnVal);
  }
});
