export default function search() {
  return {
    search: "",
    items: ["foo", "bar", "baz"],
    get filteredItems() {
      return this.items.filter((i) => i.startsWith(this.search));
    },
  };
}