var slides = document.querySelectorAll('.slide');
var arrowRight = document.getElementById('arrow-right');
var arrowLeft = document.getElementById('arrow-left');
var dots = document.querySelectorAll('.dot');
var currentSlide = 0;




function reset(){
    var i;
    for(i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }

    for(i = 0; i < dots.length; i++){
        dots[i].classList.remove('active');
    }

}

function startSlide(){
    reset();
    slides[0].style.display = 'flex';
    dots[0].classList.add('active');
}

function slideLeft(){
    reset();
    slides[currentSlide - 1].style.display = 'flex';
    dots[currentSlide - 1].classList.add('active');
    currentSlide --;
}

function slideRight(){
    reset();
    slides[currentSlide + 1].style.display = 'flex';
    dots[currentSlide + 1].classList.add('active');
    
    currentSlide ++;
}

arrowLeft.addEventListener('click', function(){
    if(currentSlide === 0){
        currentSlide = slides.length;
    }
    slideLeft();
});

arrowRight.addEventListener('click', function(){
    if(currentSlide === slides.length -1){
        currentSlide = -1;
    }

    slideRight();
});

startSlide();
