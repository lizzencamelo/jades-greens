/* ============== SHOW MENU ================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    //Validate that variables exist
    if (toggle && nav) {
        //Add the show-menu class to the div tag with nav_menu class
        toggle.addEventListener('click', () => {
        nav.classList.toggle('show_menu');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

/* ============== REMOVE MENU MOBILE ============== */
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    //Remove show-menu class when each nav_link is clicked
    navMenu.classList.remove('show_menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* ============ SCROLL SECTIONS ACTIVE LINK ============ */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link');
        }
        else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

/* ============== CHANGE BACKGROUND HEADER =============== */
function scrollHeader() {
    const nav = document.getElementById('header');
    //When the scroll is greater than 200 viewport height, 
    //add scroll_header class to the header tag
    if (this.scrollY >= 200)
        nav.classList.add('scroll_header');
    else
        nav.classList.remove('scroll_header');
}

window.addEventListener('scroll', scrollHeader);

/* ================== SHOW SCROLL TOP ================= */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    //When the scroll is higher than 560 vh 
    //add the show_scroll class to the scrolltop class
    if (this.scrollY >= 560)
        scrollTop.classList.add('show_scroll');
    else
        scrollTop.classList.remove('show_scroll');
}

window.addEventListener('scroll', scrollTop);


/* ================== DARK LIGHT THEME ================= */
const themeButton = document.getElementById("theme-button");
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

//We validate if the user previously chose the topic
if (selectedTheme) {
    //If the validation is fulfilled, we ask what the issue was to know if we activated or deactivted the dark 
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);

}

//Activate or deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //add or remove the dark icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    //We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());

});

/* =================== SCROLL REVEAL ANIMATION ======================= */
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    dration: 2000,
    reset: true
});

sr.reveal(`.home_data, .home_img
            .about_data, .about_img,
            .services_content,
            .menu_content,
            .app_data, .app_img,
            .contact_data, .contact_button,
            .footer_content`, {
    interval: 200
})









