import"./utilities.js";import"./types.js";import{_ as t}from"./_rollupPluginBabelHelpers-5bd7183e.js";import{L as e,c as n,h as r}from"./lit-element-ae08ccac.js";import{c as o}from"./connect-mixin-144a42a2.js";import"./redux-a2f99696.js";import{store as i}from"./configureStore.js";import"./initialState.js";import"./utilities2.js";import"./current.js";import"./forecast.js";import"./preferences.js";import"./index2.js";import"./root.js";import"./middleware.js";function s(){var e=t(["\n      <header><strong>","</strong></header>\n    "]);return s=function(){return e},e}function a(){var e=t(["\n      :host {\n        display: block;\n      }\n\n      header {\n        font-size: var(--x-location-header-font-size, 1.5rem);\n        text-align: center;\n      }\n\n      ul {\n        list-style: none;\n        padding: none;\n      }\n\n      ul > li {\n        margin-top: 1rem;\n      }\n    "]);return a=function(){return e},e}var c=class extends(o(i)(e)){static get styles(){return n(a())}static get properties(){return{location:{type:Object}}}stateChanged(t){var{weather:e}=t;this.location=e.preferences.location||this.location}render(){return r(s(),this.location.placename)}};customElements.get("x-location")||customElements.define("x-location",c);export default c;export{c as XLocation};
