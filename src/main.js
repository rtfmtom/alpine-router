import router from "./components/router.js";
import search from "./components/search.js";

document.addEventListener("alpine:init", () => {
  // register your Alpine.data components here
  Alpine.data("router", router);
  Alpine.data("search", search);
});