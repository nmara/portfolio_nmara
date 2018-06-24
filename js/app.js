// ---------Desktop nav-------------------
var navItems = document.getElementsByClassName('nav__item');
function removeActiveNav() {
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("active");
    }
}
window.addEventListener("scroll", function() {
    var sections = document.getElementsByClassName('section');
    var breakPoints = [];
    for (var i = 0; i < sections.length; i++) {
        breakPoints.push((sections[i].offsetTop)-80);
    }
    for (var i = 0; i < sections.length; i++) {
        if(window.pageYOffset >= breakPoints[i] && window.pageYOffset < breakPoints[i+1]) {
            removeActiveNav();
            navItems[i].classList.add("active");
        } else if (i === (sections.length-1) && window.pageYOffset >= breakPoints[i]) {
            removeActiveNav();
            navItems[i].classList.add("active");
        }
    }
})

function correctNavScroll(el) {
    var sectionName = el.getAttribute("data-nav");
    var section = document.getElementById(sectionName);
    var position = section.offsetTop;
    var scrollDestination = position - 80;
    // window.scrollTo(0, scrollDestination);
    window.scrollTo({
        top: scrollDestination,
        left: 0,
        behavior: 'smooth'
    });
    // if(window.innerWidth < 1215) {
    //     navIcon1.classList.remove("open");
    //     navMenuBar.classList.toggle("nav_menu_bar_visible");
    //     var mobileNavBg = document.getElementById('nav-menu-bar-bg');
    //     mobileNavBg.classList.toggle("show-mobile-nav");
    // }
}
