
//SHOPPING OPTIONS
var shopByBtn = document.querySelector('.shop-by-btn');
var shoppingMenu = document.querySelector('.shopping-options__menu');
var closeBtn = document.querySelector('.close-minicart-btn');

shopByBtn.addEventListener('click', function(){
    if(shoppingMenu.classList.contains('visualy-hidden--mobile')){
        shoppingMenu.classList.remove('visualy-hidden--mobile');
    } 
})

closeBtn.addEventListener('click', function(){
    shoppingMenu.classList.add('visualy-hidden--mobile');
})


//BUTTONS
var gridBtn = document.querySelector('.button-grid');
var listBtn = document.querySelector('.button-list');
//LIST ELEMENTS
var list = document.querySelector('.items-list');
var listItems = document.querySelectorAll('.items-list__item');
var listItemsButtons = document.querySelectorAll('.item__buttons');
var listItemsDetails = document.querySelectorAll('.items-list-details');

listBtn.addEventListener('click', function(e){
    e.preventDefault();
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
    list.classList.remove('items-list__grid-view');
    list.classList.add('items-list__list-view');
    listItems.forEach(li => {
        li.classList.remove('items-list__item-grid-view');
    })
    listItems.forEach(li => {
        li.classList.add('items-list__item-list-view');
    })
    listItemsButtons.forEach(btn => {
        btn.classList.add('list-view__buttons');
    })
    listItemsDetails.forEach(det => {
        det.classList.add('items-list-details__list-view');
    })
})

gridBtn.addEventListener('click', function(e){
    e.preventDefault();
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
    list.classList.remove('items-list__list-view');
    list.classList.add('items-list__grid-view');
    listItems.forEach(li => {
        li.classList.remove('items-list__item-list-view');
    })
    listItems.forEach(li => {
        li.classList.add('items-list__item-grid-view');
    })
    listItemsButtons.forEach(btn => {
        btn.classList.remove('list-view__buttons');
    })
    listItemsDetails.forEach(det => {
        det.classList.remove('items-list-details__list-view');
    })
})

