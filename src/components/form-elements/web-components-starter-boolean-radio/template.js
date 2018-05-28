const style = ({type}) => `<style>
  :host {
    display: block;
  }

  /* ie11 has a :host styling issue */
  div[data-web-components-starter-boolean-radio] {
    margin-bottom: 1rem;
  }

  div[data-web-components-starter-boolean-radio] label {
    margin-bottom: .5rem;
  }

  #groupLabel${type} {
    display: block;
  }

  div[data-web-components-starter-boolean-radio] label,
  div[data-web-components-starter-boolean-radio] input {
    vertical-align: bottom;
    width: inherit;
  }
</style>`

export default ({type}) => `
  ${style({type})}

  <div data-web-components-starter-boolean-radio>
    <label id="groupLabel${type}" for="${type}">
      <slot name="label"></slot>
    </label>
    <div>
      <input
        id="${type}RadioOne"
        name="${type}Radio"
        type="radio"
        value="1"
      >
      <label for="${type}RadioOne">Yes</label>
    </div>
    <div>
      <input
        id="${type}RadioTwo"
        name="${type}Radio"
        type="radio"
        checked="checked"
        value="0"
      >
      <label for="${type}RadioTwo">No</label>
    </div>
  </div>
`
