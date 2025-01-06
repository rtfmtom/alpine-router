import secrets from "../../secrets.js";

export default function api(param) {
  return {
    url: "http://localhost:8787/d",
    bearerToken: secrets.TOKEN,
    loading: true,
    details: {},

    init() {
      this.getDetails(param);
    },

    getDetails(param) {
      fetch(`${this.url}/${param}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.bearerToken}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            if (response.status === 401) {
              throw new Error("Unauthorized - Check your authorization token.");
            }
            throw new Error(`HTTP error: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.details = data;
        })
        .catch((error) => console.error("Error fetching case details:", error))
        .finally(() => (this.loading = false));
    },
  };
}
