export function getThemeFromLocalStorage() {
  if (typeof window !== "undefined") {
    // if user already changed the theme, use it
    if (window.localStorage.getItem("dark")) {
      return JSON.parse(window.localStorage.getItem("dark"));
    }

    // else return their preferences
    return (
      !!window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }
}

export function setThemeToLocalStorage(value) {
  if (typeof window !== "undefined") {
    // console.log(window.innerWidth);
    // window.localStorage.setItem("dark", value);
    if (value) {
      document.getElementsByTagName("html")[0].classList.add("theme-dark");
    } else {
      document.getElementsByTagName("html")[0].classList.remove("theme-dark");
    }
  }
}
