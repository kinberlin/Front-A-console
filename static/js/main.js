document.addEventListener("DOMContentLoaded", function (event) {
  // Active menu styling
  var active = this.querySelectorAll("a.nuxt-link-exact-active");

  for (let i = 0; i < active.length; i++) {
    active[i].classList.add("text-gray-800", "dark:text-gray-100");
    active[i].parentElement.innerHTML +=
      '<span class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>';
  }

  // this.querySelectorAll("a.nuxt-link-active").classList.add(
  //   "text-gray-800",
  //   "dark:text-gray-100"
  // );

  // this.querySelectorAll("a.nuxt-link-exact-active").parentElement.innerHTML +=
  //   '<span class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>';
  // // console.log(this.querySelector("a.nuxt-link-exact-active").parentElement);
});
