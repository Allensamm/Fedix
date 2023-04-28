var navBarShow = false
const hamburge = document.querySelector('.gpt3__navbar-menu_container');

document.querySelector('.hamburger').addEventListener('click', () => {
    if (navBarShow != true) {
        hamburge.style.display = 'block'
        navBarShow = true;
    } else {
        hamburge.style.display = 'none'
        navBarShow = false;
    }
})

// preloader
window.addEventListener('load', function() {
  var preloader = document.querySelector('#preloader');
  preloader.style.display = 'none';
});


// preloader
const hidden = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else if (entry.target.classList.contains('visible')) {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.25
});

hidden.forEach(hide => {
  observer.observe(hide);
});
