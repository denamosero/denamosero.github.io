// // When the user scrolls the page, execute myFunction
// // w3schools
    window.onscroll = function() {myFunction()};

    // Get the header
    var header = document.querySelector(".header");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    }

// // nav hide on scroll down and show on scroll up
// // https://www.youtube.com/watch?v=Q_XZk5Vnujw&ab_channel=Fireship
{
    const nav = document.querySelector(".nav");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
            nav.classList.add("nav--hidden");
        } else {
            nav.classList.remove("nav--hidden");
        }

        lastScrollY = window.scrollY;
    });
}