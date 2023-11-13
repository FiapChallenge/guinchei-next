let prevScrollpos = window.scrollY;

let nav = document.getElementById("navbar");

window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos || currentScrollPos < 96) {
    nav.style.transform = "translateY(0)";
  } else {
    nav.style.transform = "translateY(-100%)";
  }
  prevScrollpos = currentScrollPos;
};

const buttonOpen = document.getElementById("hamburger-open");
const buttonClose = document.getElementById("hamburger-close");
function toggleNavbar() {
  if (buttonOpen.classList.contains("hidden")) {
    buttonOpen.classList.remove("hidden");
    buttonClose.classList.add("hidden");
  } else {
    buttonOpen.classList.add("hidden");
    buttonClose.classList.remove("hidden");
  }
}

const menuBtn = document.getElementById("navbar-toggle");
menuBtn.addEventListener("click", toggleNavbar);

document.addEventListener("click", function (e) {
  if (!e.isTrusted) return;
  if (
    (!e.target.closest("nav") &&
      menuBtn.getAttribute("aria-expanded") == "true") ||
    (e.target.classList.contains("nav-link") &&
      menuBtn.getAttribute("aria-expanded") == "true")
  ) {
    menuBtn.click();
  }
});

// Get the button
const mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button

const scrollFunction = () => {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.classList.remove("opacity-0");
    mybutton.classList.remove("invisible");
  } else {
    mybutton.classList.add("opacity-0");
    mybutton.classList.add("invisible");
  }
};
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction, { passive: true });
