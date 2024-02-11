document.querySelectorAll(".observedElement").forEach((element) => {
  if (element) {
    const observer = new IntersectionObserver(
      (entries) => {
        addObserver(entries, element);
      },
      { threshold: 0.4 }
    );
    observer.observe(element);
  }
});

const addObserver = (entries, element) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      element.classList.add("in-viewport");
    } else {
      element.classList.remove("in-viewport");
    }
  });
};

let headerElement = document.getElementById("header");
let navElement = document.getElementsByClassName("navigation")[0];

const navObserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        navElement.classList.add("alt-nav");
      } else {
        navElement.classList.remove("alt-nav");
      }
    });
  },
  { threshold: 1 }
);

navObserver.observe(headerElement);
