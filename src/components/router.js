import homeTemplate from "../templates/homeTemplate.js";
import aboutTemplate from "../templates/aboutTemplate.js";
import contactTemplate from "../templates/contactTemplate.js";
import searchTemplate from "../templates/searchTemplate.js";
import apiTemplate from "../templates/apiTemplate.js";

export default function router() {
  const routes = {
    home: "",
    about: "about",
    contact: "contact",
    search: "search",
    api: "api",
  };

  const templates = {
    [routes.home]: homeTemplate,
    [routes.about]: aboutTemplate,
    [routes.contact]: contactTemplate,
    [routes.search]: searchTemplate,
    [routes.api]: apiTemplate,
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

    api: {
      href: routes.api,
      ["@click.prevent"]() {
        this.navigate(routes.api);
      },
    },
  };
}