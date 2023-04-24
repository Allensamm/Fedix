var navBarShow = false
const hamburge = document.querySelector('.gpt3__navbar-menu_container');

document.querySelector('.hamburger').addEventListener('click', () =>{
    if(navBarShow != true){
        hamburge.style.display = 'block'
        navBarShow = true;
    }else{
        hamburge.style.display  = 'none'
        navBarShow = false;
    }
})