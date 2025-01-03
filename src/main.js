import router from "./router.js";

document.addEventListener("alpine:init", () => {
  Alpine.data("router", router);
});
