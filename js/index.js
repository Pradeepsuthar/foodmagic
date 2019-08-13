// Side NavBar
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Sign Up / Login
let loginForm = document.getElementById("loginForm");
let registerForm = document.getElementById("registerForm");


function showLoginForm(){
  if(document.getElementById('registerForm').style.display=='block') {
    document.getElementById('registerForm').style.display='none';
  }
    document.getElementById('loginForm').style.display='block';
}

function showRegisterForm(){
  if(document.getElementById('loginForm').style.display=='none') {
    document.getElementById('loginForm').style.display='blcok';
  }
    document.getElementById('registerForm').style.display='block';
    document.getElementById('loginForm').style.display='none';

}

// Preloader

let preloader;

function foodmagicPreLoader() {
  preloader = setTimeout(showPage, 18000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}