import secrets from "../../secrets.js";

export default /*html*/ `
<div x-data="api('${secrets.recordId}')">
  <div>
    <template x-if="loading">
      <p>Loading case details...</p>
    </template>
    <template x-if="!loading">
      <div :="details">
        <p>This page is populated using data from an API call</p>
        <p><strong>Record Id Number:</strong> <span x-text="details.caseNo"></span></p>
      </div>
    </template>
  </div>
</div>
`;
