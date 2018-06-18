const style = `<style>
  :host {
    display: block;
  }

  /* ie11 has a :host styling issue */
  div[data-web-components-starter-select] {
    margin-bottom: 1rem;
  }

  select {
    width: calc(100% + 1rem);
  }
</style>`

export default ({ options, type }) => `
  ${style}

  <div data-web-components-starter-select>
    <label for="${type}"><slot name="label"></slot></label>
    <select id="${type}" name="${type}">
      ${options ? options.reduce((pre, cur) => `${pre}
        <option
          value="${cur.value}"
          ${(selected => selected
            ? 'selected'
            : ''
          )(cur.selected)}
        >
          ${cur.text}
        </option>
      `, '') : []}
    </select>
  </div>
`
