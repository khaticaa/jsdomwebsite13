const navbar = document.createElement("div");
navbar.classList.add("navbar");

const logo = document.createElement("div");
logo.classList.add("logo");
logo.textContent = "Start Bootstrap";

const navList = document.createElement("ul");
navList.classList.add("nav-list");

const pages = ["Home", "Resume", "Project", "Contact"];

pages.forEach((page) => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = page;

  listItem.appendChild(link);
  navList.appendChild(listItem);
});

const banner = document.createElement("div");
banner.classList.add("banner");

const rightDiv = document.createElement("div");
rightDiv.classList.add("right");

const leftDiv = document.createElement("div");
leftDiv.classList.add("left");

const section3 = document.createElement("div");
section3.classList.add("section3");

const section3TextContent = document.createElement("div");
section3TextContent.classList.add("section3TextContent");

const footer = document.createElement("div");
footer.classList.add("footer");

const footerLogo = document.createElement("div");
footerLogo.classList.add("footerLogo");

const footerRight = document.createElement("div");
footerRight.classList.add("footerRight");

const footerRightLeft = document.createElement("div");
footerRightLeft.classList.add("footerRightLeft");

const footerRightCenter = document.createElement("div");
footerRightCenter.classList.add("footerRightCenter");

const footerRightRight = document.createElement("div");
footerRightRight.classList.add("footerRightRight");

navbar.appendChild(logo);
navbar.appendChild(navList);
banner.appendChild(rightDiv);
banner.appendChild(leftDiv);
section3.appendChild(section3TextContent);
footer.appendChild(footerLogo);
footer.appendChild(footerRight);
footerRight.appendChild(footerRightLeft);
footerRight.appendChild(footerRightCenter);
footerRight.appendChild(footerRightRight);
document.body.appendChild(navbar);
document.body.appendChild(banner);
document.body.appendChild(section3);
document.body.appendChild(footer);
