let rootMargin;

if (window.innerWidth > 768) {
  rootMargin = {
    rootMargin: "0px 0px -150px 0px",
  };
} else {
  rootMargin = {
    rootMargin: "0px 0px 0px 0px",
  };
  const elements = document.querySelectorAll(".obs-hidden");
  elements.forEach((element) => {
    element.removeAttribute("style");
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("obs-visible");
    }
  });
}, rootMargin);

const hiddenElements = document.querySelectorAll(".obs-hidden");
hiddenElements.forEach((hiddenElement) => observer.observe(hiddenElement));

const body = document.querySelector("body");

if (window.scrollY > 0) {
  body.classList.remove("scroll-top");
}

window.addEventListener(
  "scroll",
  () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      body.classList.add("scroll-bottom");
    } else if (window.scrollY === 0) {
      body.classList.add("scroll-top");
    } else {
      body.classList.remove("scroll-top");
      body.classList.remove("scroll-bottom");
    }
  },
  { passive: true }
);
