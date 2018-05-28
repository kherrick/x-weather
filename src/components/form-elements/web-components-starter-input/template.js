const style = `<style>
  :host {
    display: block;
  }

  /* ie11 has a :host styling issue */
  div[data-web-components-starter-input] {
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
  }
</style>`

export default ({type}) => `
  ${style}

  <div data-web-components-starter-input>
    <label for="${type}"><slot name="label"></slot></label>
    <input id="${type}" type="text">
  </div>
`
