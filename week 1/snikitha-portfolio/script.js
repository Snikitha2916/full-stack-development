function toggleMenu() {
    const nav = document.querySelector(".nav-links");

    nav.classList.toggle("active");
}


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelector(".nav-links").classList.remove("active");

    });

});