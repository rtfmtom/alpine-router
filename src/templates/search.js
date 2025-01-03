export default /*html */ `
<div>
  <h1>Search Page</h1>
  <div x-data="search">
    <input x-model="search" placeholder="Search...">
    <ul>
      <template x-for="item in filteredItems" :key="item">
        <li x-text="item"></li>
      </template>
    </ul>
  </div>
</div>
`