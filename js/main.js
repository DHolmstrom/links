const navBar = document.querySelector('.nav__toggle')
const nav = document.querySelector('.nav')
const body = document.querySelector('body')

let navState = false

navBar.addEventListener('click', toggleNav)

function toggleNav() {
    if (navState == false) {
        body.classList.add('no__scroll')
        nav.classList.add('open')

        navState = true
    } else {
        body.classList.remove('no__scroll')
        nav.classList.remove('open')

        navState = false
    }
}


function skickaMail(){
    var email= document.getElementsByName('email').value;
    var name = document.getElementsByName('name').value;
    var subject = document.getElementsByName('subject').value;
    var msg = document.getElementsByName('msg').value;

    msg = msg.replace(/\r?\n/g, '%0d%0a');
  
    window.location.href = 'mailto:dennis@holmstrom.nu?subject=' + subject + '&body=' + msg + '%0d%0a%0d%0aHälsningar%0d%0a' + name + '%0d%0a' + email;
}

function openSubNav(subNav) {
    subNav = document.querySelector('#'+subNav);
    mainNav = document.querySelector('#nav--main');
    subNav.classList.add('open');
    mainNav.classList.add('close');
}

function closeSubNav() {
    const openSubNav = document.querySelector('.nav__sub.open');
    const mainNav = document.querySelector('#nav--main');
    openSubNav.classList.remove('open');
    mainNav.classList.remove('close');
}
