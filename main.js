const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.navbar-links');
const navBar = document.querySelector('[data-nav]');

toggleButton.addEventListener('click', () => {
    if (navLinks.classList.contains('show-links')){
        navLinks.classList.remove('show-links');
    } else {
        navLinks.classList.add('show-links');
    }
})

document.querySelectorAll(".card-text").forEach((x) => {
    x.innerText = x.innerText.replace(/\./g, ".\n");
  });

  window.addEventListener("resize", () => {
    if (navLinks.classList.contains('show-links') && window.innerWidth >= "800"){
        navLinks.classList.remove('show-links');
    } else {
        return;
    }
});

// window.addEventListener('scroll', (event) => {

//     const scrollTop = window.scrollY;
//     var navResizeFunc = function () {
//         let height;
    
//         if (scrollTop <= 50) {
//           height = 100 - scrollTop;
//         } else {
//           height = 50;
//         }
//         navBar.style.height = `${height}px`;
//       };
    
//       navResizeFunc(true);
//       window.addEventListener("scroll", navResizeFunc());
// })

window.addEventListener('scroll', reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }