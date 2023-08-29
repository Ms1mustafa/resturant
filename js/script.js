import { isElementPartiallyInViewport, themeFunction } from './sheard.js';

themeFunction();

const itemsContainer = document.querySelector(".items");
const items = document.querySelectorAll(".items__item");
const sectionTitle = document.querySelector(".sectionTitle");
const delayInterval = 150; // Delay in milliseconds

function handleScroll() {
  if (isElementPartiallyInViewport(itemsContainer, 20)) {
    sectionTitle.style.color = 'var(--color-grey-light-1)';
    sectionTitle.style.textShadow = '2px 4px 6px rgba(0, 0, 0, 0.397)';
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("items__item--animation");
      }, (index*1.5) * delayInterval);
    });
  }
}

window.addEventListener("scroll", handleScroll);

const menu = document.querySelector(".menu");
const menuTitleHeadingPrimary = document.querySelector(".menuTitle__heading-primary");
const menuTitleHeadingSecondary = document.querySelector(".menuTitle__heading-secondary");
const btnText = document.querySelector(".btn");
const menuImg = document.querySelector(".menuImg__img");

function handleScrollMenu() {
  if (isElementPartiallyInViewport(menu, 50)) {
    menuTitleHeadingPrimary.style.animation = 'moveInRight 0.7s ease-out';
    menuTitleHeadingSecondary.style.animation = 'moveInLeft 0.7s ease-out';
    menuImg.style.animation = 'moveInLeft 0.7s ease-out .3s';
    btnText.style.animation = 'moveUp 0.7s ease-out .2s';
    menuTitleHeadingPrimary.style.animationFillMode = 'backwards';
    menuTitleHeadingPrimary.style.opacity = 1;
    menuTitleHeadingSecondary.style.animationFillMode = 'backwards';
    menuTitleHeadingSecondary.style.opacity = 1;
    btnText.style.animationFillMode = 'backwards';
    btnText.style.opacity = 1;
    menuImg.style.animationFillMode = 'backwards';
    menuImg.style.opacity = 1;
  }
}

window.addEventListener("scroll", handleScrollMenu);

const footer = document.querySelector(".footer");
const footerItems = document.querySelectorAll(".footer__item");

function handleScrollFooter() {
  if (isElementPartiallyInViewport(footer, 50)) {
    footerItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("footer__item--animation");
      }, index * delayInterval);
    });
  }
}

window.addEventListener("scroll", handleScrollFooter);

/*fetch('https://api64.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const publicIP = data.ip;
    console.log('Public IP address:', publicIP);
  })
  .catch(error => {
    console.error('Error fetching IP address:', error);
  });*/
console.log('ssdcfds');