document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");
    const backdrop = document.getElementById("backdrop");
    const navLinks = document.querySelectorAll("nav a");

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.add("mobile-menu-active");
        backdrop.classList.add("backdrop-active");
    });

    closeMenu.addEventListener("click", () => {
        mobileMenu.classList.remove("mobile-menu-active");
        backdrop.classList.remove("backdrop-active");
    });

    backdrop.addEventListener("click", () => {
        mobileMenu.classList.remove("mobile-menu-active");
        backdrop.classList.remove("backdrop-active");
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth",
            });
            mobileMenu.classList.remove("mobile-menu-active");
            backdrop.classList.remove("backdrop-active");
        });
    });

    // trunsted
    $(".trusted-slider").flickity({
        prevNextButtons: false,
        pageDots: false,
        autoPlay: true,
        wrapAround: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {},
            },
        ],
    });
    $(".slider-beautifully").flickity({
        cellAlign: "left",
        prevNextButtons: false,
        pageDots: false,
        autoPlay: true,
        wrapAround: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    groupCells: "80%",
                },
            },
        ],
    });

    ScrollReveal().reveal(".text-h1", {
        delay: 500,
        origin: "bottom",
        duration: 1500,
        distance: "20px",
    });
    ScrollReveal().reveal(".text-desc", {
        delay: 1000,
        origin: "bottom",
        duration: 1500,
        distance: "20px",
    });
    ScrollReveal().reveal(".img-hero", {
        delay: 1500,
        origin: "bottom",
        duration: 1500,
        distance: "20px",
    });
    ScrollReveal().reveal(".logo", { delay: 100 });
    ScrollReveal().reveal(".text-nav", {
        interval: 200,
        origin: "left",
        delay: 500,
    });
    ScrollReveal().reveal(".rounded-3xl", {
        interval: 300,
        origin: "bottom",
        delay: 500,
        duration: 1000,
        distance: "20px",
    });
    ScrollReveal().reveal("#trusted", {
        delay: 500,
        origin: "bottom",
        duration: 1500,
        distance: "20px",
    });
    ScrollReveal().reveal("#start", {
        delay: 500,
        origin: "bottom",
        duration: 1500,
        distance: "20px",
    });
    ScrollReveal().reveal("#value", {
        delay: 500,
        origin: "bottom",
        duration: 1500,
        distance: "20px",
    });
    ScrollReveal().reveal("#largest", {
        delay: 500,
        origin: "bottom",
        duration: 1500,
        distance: "20px",
    });
    ScrollReveal().reveal("#beautifully", {
        delay: 500,
        origin: "bottom",
        duration: 1500,
        distance: "20px",
    });
    ScrollReveal().reveal("h2", {
        delay: 100,
        origin: "bottom",
        duration: 1500,
        distance: "20px",
    });
    ScrollReveal().reveal("#download", {
        delay: 500,
        origin: "bottom",
        duration: 1500,
        distance: "20px",
    });
    ScrollReveal().reveal("footer", {
        delay: 500,
        origin: "bottom",
        duration: 1500,
        distance: "20px",
    });
});
