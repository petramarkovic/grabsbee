var menuIcons = document.querySelectorAll('.navbar-btns');
var header = document.querySelector('.header');
var nav = document.querySelector('.navbar');
var closeBtn = document.querySelector('.navbar-close-btn');
var searchBar = document.querySelector('.search-bar');
var closeSearch = document.querySelector('.close-search');
var closeMinicart = document.querySelector('.close-minicart');
var minicart = document.querySelector('.minicart-section');


header.addEventListener('click', function(e){
    if(e.target.classList.contains('navbar-btns') && nav.classList.contains('visualy-hidden')){
        nav.classList.remove('visualy-hidden');
     }
     if(e.target.classList.contains('search-btn') && searchBar.classList.contains('visualy-hidden')){
        searchBar.classList.remove('visualy-hidden');
     }
     if(e.target.classList.contains('minicart-btn') && minicart.classList.contains('visualy-hidden')){
        minicart.classList.remove('visualy-hidden');
     }
})

closeBtn.addEventListener('click', function(){
    nav.classList.add('visualy-hidden');
})

closeSearch.addEventListener('click', function(){
    searchBar.classList.add('visualy-hidden');
})

closeMinicart.addEventListener('click', function(){
    minicart.classList.add('visualy-hidden');
})
