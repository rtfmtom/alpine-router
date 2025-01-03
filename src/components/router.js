import homeTemplate from "../templates/home.js";
import aboutTemplate from "../templates/about.js";
import contactTemplate from "../templates/contact.js";
import searchTemplate from "../templates/search.js";

export default function router() {
  const routes = {
    home: "/",
    about: "/about",
    contact: "/contact",
    search: "/search"
  };

  const templates = {
    [routes.home]: homeTemplate,
    [routes.about]: aboutTemplate,
    [routes.contact]: contactTemplate,
    [routes.search]: searchTemplate,
  };

  return {
    currentRoute: "",
    html: "",

    init() {
      this.currentRoute = window.location.hash.slice(1) || routes.home;
      this.html =
        templates[this.currentRoute] || `<div><h1>404 Not Found</h1></div>`;
      window.addEventListener("hashchange", () => {
        this.currentRoute = window.location.hash.slice(1) || routes.home;
        this.html =
          templates[this.currentRoute] || `<div><h1>404 Not Found</h1></div>`;
      });
    },

    navigate(route) {
      window.location.hash = route;
    },

    home: {
      href: routes.home,
      ["@click.prevent"]() {
        this.navigate(routes.home);
      },
    },

    about: {
      href: routes.about,
      ["@click.prevent"]() {
        this.navigate(routes.about);
      },
    },

    contact: {
      href: routes.contact,
      ["@click.prevent"]() {
        this.navigate(routes.contact);
      },
    },

    search: {
      href: routes.search,
      ["@click.prevent"]() {
        this.navigate(routes.search);
      },
    },

  };
}