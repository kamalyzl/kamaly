'use strict';

var home = document.getElementById('home');
var about = document.getElementById('about');
var skill = document.getElementById('skill');
var proyect = document.getElementById('proyect');
var contact = document.getElementById('contact');
var container = document.getElementById('container_desktop');

home.addEventListener('click', function () {

  console.log('home');
});

about.addEventListener('click', function () {
  container.innerHTML = "p hola";
});

skill.addEventListener('click', function () {
  console.log('skill');
});

proyect.addEventListener('click', function () {
  console.log('proyect');
});

contact.addEventListener('click', function () {
  console.log('contact');
});