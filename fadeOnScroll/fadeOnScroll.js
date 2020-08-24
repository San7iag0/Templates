const header = document.getElementById('header');


let oldScrollPosition = 0;

// false = scrolling down
// true = srolling up 
let isScrollingUp = false;

let isHeaderVisible = true; 

window.addEventListener("scroll", fScroll);

function fScroll(){
    isScrollingUp = oldScrollPosition > window.scrollY;
    oldScrollPosition = window.scrollY;

    if(!isScrollingUp && window.scrollY > 200 && isHeaderVisible){

        isHeaderVisible = false;
    }

    if(isScrollingUp && ! isHeaderVisible){
        header.classList.remove('invisible');
    
        isHeaderVisible = true;
    }
}