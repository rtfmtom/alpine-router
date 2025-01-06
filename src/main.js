import router from "./components/router.js";
import search from "./components/search.js";
import someButton from "./components/button.js";
import api from "./components/api.js"

document.addEventListener("alpine:init", () => {
  // register your Alpine.data components here
  Alpine.data("router", router);
  Alpine.data("search", search);
  Alpine.data("someButton", someButton);
  Alpine.data("api", api)

});
