const portfolioItems = document.querySelectorAll(".portfolio-item-wrapper");

portfolioItems.forEach((portfolioItem) => {
    portfolioItem.addEventListener("mouseover", () => {
    portfolioItem.childNodes[1].classList.add("img-darken");
    });

    portfolioItem.addEventListener("mouseout", () => {
    portfolioItem.childNodes[1].classList.remove("img-darken");
    });
});

const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
})

var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}