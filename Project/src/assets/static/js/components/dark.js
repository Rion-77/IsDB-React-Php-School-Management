const THEME_KEY = "theme";

// function toggleDarkTheme() {
//   setTheme(
//     document.documentElement.getAttribute("data-bs-theme") === 'dark'
//       ? "light"
//       : "dark"
//   )
// }

/**
 * Set theme for mazer
 * @param {"dark"|"light"} theme
 * @param {boolean} persist
 */
function setTheme(theme, persist = false) {
  document.body.classList.add(theme);
  document.documentElement.setAttribute("data-bs-theme", theme);

  if (persist) {
    localStorage.setItem(THEME_KEY, theme);
  }
}

/**
 * Init theme from setTheme()
 */
/* function initTheme() {
  //If the user manually set a theme, we'll load that
  const storedTheme = localStorage.getItem(THEME_KEY)
  if (storedTheme) {
    return setTheme(storedTheme)
  }
  //Detect if the user set his preferred color scheme to dark
  if (!window.matchMedia) {
    return
  }

  //Media query to detect dark preference
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

  //Register change listener
  mediaQuery.addEventListener("change", (e) =>
    setTheme(e.matches ? "dark" : "light", true)
  )
  return setTheme(mediaQuery.matches ? "dark" : "light", true)
} */

// window.addEventListener('DOMContentLoaded', () => {
//   const toggler = document.getElementById("toggle-dark")
//   const theme = localStorage.getItem(THEME_KEY)

//   if(toggler) {
//     toggler.checked = theme === "dark"

//     toggler.addEventListener("input", (e) => {
//       setTheme(e.target.checked ? "dark" : "light", true)
//     })
//   }

// });
window.addEventListener("click", (e) => {
  const toggler = e.target.closest("#toggle-dark");
  // const toggler = e.target.closest("#sidebar").querySelector("#toggle-dark");
  console.log(toggler);

  if (!toggler) return;

  // Selects html tag and gets attribute
  const htmlTag = document.documentElement;
  const currentTheme = htmlTag.getAttribute("data-bs-theme");
  // console.log(currentTheme);

  if (currentTheme === "dark") {
    htmlTag.setAttribute("data-bs-theme", "light");
  } else {
    htmlTag.setAttribute("data-bs-theme", "dark");
  }
  // const theme = localStorage.getItem(THEME_KEY);
  // console.log(theme);

  // if(toggler) {
  //   toggler.checked = theme === "dark"

  //   toggler.addEventListener("input", (e) => {
  //     setTheme(e.target.checked ? "dark" : "light", true)
  //   })
  // }
});

// initTheme()
