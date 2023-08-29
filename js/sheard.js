export function isElementPartiallyInViewport(el, percentage) {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const visibleHeight =
    Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
  return visibleHeight / el.clientHeight >= percentage / 100;
}

const themeCheck = document.querySelector(".theme__check");
const theme = document.querySelector(".theme");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const logo = document.getElementById("logo");
const root = document.documentElement;

export const themeFunction = function () {
  const themeChecked = function (checked) {
    if (checked == true) {
      theme.style.backgroundImage =
        "linear-gradient(to right bottom, #fff, #f2f2f2)";
      // container.style.backgroundImage = "linear-gradient(to right, #161616, #383838)";
      container.style.backgroundImage = "url(img/black-gradient.jpg)";
      root.style.setProperty("--color-Primary-dark1", "#faf9f9");
      root.style.setProperty("--color-Primary-dark2", "#EFC453");
      themeCheck.checked = true;
      header.style.backgroundColor = "var(--color-night)";
      logo.style.fill = "#fff";
    } else {
      theme.style.backgroundImage =
        "linear-gradient(to right bottom, var(--color-blue-light), var(--color-blue-dark))"; // Reset the background image if unchecked
      container.style.backgroundImage = "url(img/white-gradient.jpg)";
      root.style.setProperty("--color-Primary-dark1", "#593101");
      root.style.setProperty("--color-Primary-dark2", "#B77222");
      themeCheck.checked = false;
      header.style.backgroundColor = "var(--color-grey-light-1)";
      logo.style.fill = "#000";
    }
  };

  themeCheck.addEventListener("click", () => {
    if (themeCheck.checked == true) {
      themeChecked(true);
      localStorage.setItem("theme", "night");
    } else {
      themeChecked(null);
      localStorage.setItem("theme", "day");
    }
  });

  const currentTheme = localStorage.getItem("theme");

  if (currentTheme == "night") {
    themeChecked(true);
  }
};
