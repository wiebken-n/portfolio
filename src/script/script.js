// adds intersection observer for scroll effects on elements of index
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

// adds intersection observer for navigation styling change on scrolling down from top
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

// add event listener for opening modal to project screenshots
document.querySelectorAll("img.project-screenshot").forEach((element) => {
  if (element) {
    element.addEventListener("click", (event) => {
      addModal(event);
    });
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        addModal(event);
      }
    });
  }
});

const addModal = function (event) {
  const projectsCard = document.getElementsByClassName("screenshots")[0];
  const modalContainer = document.createElement("div");
  const closeInfoText = document.createElement("p");
  const targetImage = event.target;
  const imageClone = targetImage.cloneNode(true);
  // create modal
  modalContainer.classList.add("modal-container");
  modalContainer.tabindex = 0;
  modalContainer.appendChild(imageClone);
  closeInfoText.innerText = "click to close";
  modalContainer.appendChild(closeInfoText);
  // add close modal on click event
  modalContainer.addEventListener("click", (event) => {
    projectsCard.removeChild(modalContainer);
  });
  imageClone.addEventListener("keydown", (event) => {
    projectsCard.removeChild(modalContainer);
    targetImage.focus();
  });
  // render modal
  projectsCard.append(modalContainer);
  // set focus on modal-image
  imageClone.focus();
};

// adds event for clicking on project preview screenshots on index -> route to project site
const catherderScreenshots = document.querySelectorAll(".screenshot-catherder");
catherderScreenshots.forEach((element) => {
  if (element) {
    element.addEventListener("click", (event) => {
      window.location.href = "./catherder";
    });
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        window.location.href = "./catherder";
      }
    });
  }
});

const edenSketchScreenshots = document.querySelectorAll(
  ".screenshot-edensketch"
);
edenSketchScreenshots.forEach((element) => {
  if (element) {
    element.addEventListener("click", (event) => {
      window.location.href = "./edensketch";
    });
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        window.location.href = "./edensketch";
      }
    });
  }
});
