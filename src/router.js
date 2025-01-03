export default function router() {

  // define your routes
  const routes = {
    home: "/",
    about: "/about",
    contact: "/contact",
  };

  return {
    currentRoute: routes.home,

    init() {
      this.currentRoute = window.location.hash.slice(1) || routes.home;
      window.addEventListener("hashchange", () => {
        this.currentRoute = window.location.hash.slice(1) || routes.home;
      });
    },

    navigate(route) {
      window.location.hash = route;
    },

    // bind click events to this.navigate(route)
    link: {
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
    },

    // conditionally display routes using x-if
    home: {
      ["x-if"]() {
        return this.currentRoute === routes.home;
      },
    },

    about: {
      ["x-if"]() {
        return this.currentRoute === routes.about;
      },
    },

    contact: {
      ["x-if"]() {
        return this.currentRoute === routes.contact;
      },
    },
  };
}
