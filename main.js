const openMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".modal-menu");
const closeMenu = document.querySelector(".nav-close");
const nav2 = document.querySelector(".nav-2");
const body = document.body;


const backgroundImages = {
  "/index.html": {
    desktop: "/assets/home/background-home-desktop.jpg",
    tablet: "/assets/home/background-home-tablet.jpg",
    mobile: "/assets/home/background-home-mobile.jpg",
  },
  "/destination-moon.html": {
    desktop: "/assets/destination/background-destination-desktop.jpg",
    tablet: "/assets/destination/background-destination-tablet.jpg",
    mobile: "/assets/destination/background-destination-mobile.jpg",
  },
  "/crew-commander.html": {
    desktop: "/assets/crew/background-crew-desktop.jpg",
    tablet: "/assets/crew/background-crew-tablet.jpg",
    mobile: "/assets/crew/background-crew-mobile.jpg",
  },
  "/technology-vehicle.html": {
    desktop: "/assets/technology/background-technology-desktop.jpg",
    tablet: "/assets/technology/background-technology-tablet.jpg",
    mobile: "/assets/technology/background-technology-mobile.jpg",
  },
};




document.addEventListener("DOMContentLoaded", () => {
let currentPath = window.location.pathname;


if (currentPath === "/" || currentPath === "/index.html") {
  currentPath = "/index.html";
}

if (currentPath.startsWith("/destination-")) {
  currentPath = "/destination-moon.html"
}

if (currentPath.startsWith("/crew-")) {
  currentPath = "/crew-commander.html"
}

if (currentPath.startsWith("/technology-")) {
  currentPath = "/technology-vehicle.html"
}


function setBackground() {
  if (backgroundImages[currentPath]) {
    const screenWidth = window.innerWidth;
    let image;


    if (screenWidth >= 1024) {
      image = backgroundImages[currentPath].desktop; // Desktop
    } else if (screenWidth >= 768) {
      image = backgroundImages[currentPath].tablet; // Tablet
    } else {
      image = backgroundImages[currentPath].mobile; // Mobile
    }

    // Add transition effect



    setTimeout(() => {

      body.style.backgroundImage = `url('${image}')`;
      body.style.opacity = "1";
    }, 300); 
  } 
}

setBackground();

// Update background on window resize
window.addEventListener("resize", setBackground);
});

// meun bar
openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("show");
  body.classList.add("no-scroll");
  openMenu.setAttribute("aria-expanded", "true");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  body.classList.remove("no-scroll");
  openMenu.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", (event) => {
  if (
    mobileMenu.classList.contains("show") &&
    !nav2.contains(event.target) &&
    !openMenu.contains(event.target)
  ) {
    mobileMenu.classList.remove("show");
    body.classList.remove("no-scroll");
    openMenu.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileMenu.classList.contains("show")) {
    mobileMenu.classList.remove("show");
    body.classList.remove("no-scroll");
    openMenu.setAttribute("aria-expanded", "false");
  }
});





//curent page style
document.addEventListener("DOMContentLoaded", () => {
  let currentPath = window.location.pathname;

  if (currentPath === "/" || currentPath === "") {
    currentPath = "/index.html"; 
  }

  if (currentPath.startsWith("/destination-")) {
    currentPath = "/destination-moon.html";
  }

  if (currentPath.startsWith("/crew-")) {
    currentPath = "/crew-commander.html";
  }

  if (currentPath.startsWith("/technology-")) {
    currentPath = "/technology-vehicle.html";
  }


  const links = document.querySelectorAll("a"); 

  
  links.forEach((link) => {
    link.classList.remove("active");
  });


  links.forEach((link) => {
    let linkPath = link.getAttribute("href");

  
    if (linkPath === "/") {
      linkPath = "/index.html";
    }
   
    if (!linkPath.endsWith(".html")) {
      linkPath += ".html";
    }

    
    if (currentPath === linkPath) {
      link.classList.add("active");  
    }
  });
});




document.addEventListener("DOMContentLoaded", () => {
// current page for crew
let currentPath = window.location.pathname
const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.classList.remove("show");
  });
  
  
  links.forEach((link) => {
    const linkPath = link.getAttribute("href");
  
    // Check if the current page path matches the link's href
    if (currentPath === linkPath || currentPath.includes(linkPath)) {
      link.classList.add("show");
    }
  });


// current page for destination
  links.forEach((link) => {
    link.classList.remove("current");
  });
  
  
  links.forEach((link) => {
    const linkPath = link.getAttribute("href");
  
    // Check if the current page path matches the link's href
    if (currentPath === linkPath || currentPath.includes(linkPath)) {
      link.classList.add("current");  
    }
  });
});
