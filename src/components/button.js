export default function someButton() {
  return {
    type: "button",

    doSomething(param) {
      console.log(`${param}`);
    },

    clicked: {
      ["@click"](event) {
        this.doSomething(event.target.dataset.param);
      },
    },
  };
}

