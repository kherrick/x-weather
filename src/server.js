const Express = require('express')
const render = require('@skatejs/ssr')

import '@skatejs/ssr/register' //eslint-disable-line no-undef

// get components
import WebComponentsStarterBooleanRadio, { load as WebComponentsStarterBooleanRadioLoad } from './components/form-elements/web-components-starter-boolean-radio/web-components-starter-boolean-radio.js'
import WebComponentsStarterContainer, { load as WebComponentsStarterContainerLoad } from './components/web-components-starter-container.js'
import WebComponentsStarterInput, { load as WebComponentsStarterInputLoad } from './components/form-elements/web-components-starter-input/web-components-starter-input.js'
import WebComponentsStarterSelect, { load as WebComponentsStarterSelectLoad } from './components/form-elements/web-components-starter-select/web-components-starter-select.js'

const app = new Express()

const template = (component) => {
  return `
    <!DOCTYPE html>
    <html>

    <head>
      <meta charset="utf-8">
      <title>Web Components Starter! | A Web Component</title>
      <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      <script defer>
        function __ssr () {
          const script = document.currentScript;
          const fakeShadowRoot = script.parentNode;
          const host = fakeShadowRoot.parentNode;
          const move = (from, to) => { while (from && from.firstChild) to.appendChild(from.firstChild) };

          // This cleans up the resulting DOM but also seems to have a positive impact on performance.
          fakeShadowRoot.removeChild(script);

          // First thing we do is remove the fake shadow root so we can attach a shadow root safely.
          host.removeChild(fakeShadowRoot);

          // Create the real shadow root once we've cleaned up.
          const realShadowRoot = host.attachShadow({ mode: 'open' });

          // Then we can move stuff over from the fake root to the real one.
          move(fakeShadowRoot, realShadowRoot);

          // We must find the slots *after* the shadow root is hydrated so we don't get any unwanted ones.
          const slots = realShadowRoot.querySelectorAll('slot');

          // At each Shadow Root, we only care about its slots, not composed slots,
          // therefore we need to move the children of top level slots, but not others
          // Also can't 'move' in loop as that will mutate the DOM and ruin the
          // 'contains' checks for subsequent slots.
          const topLevelSlots = (() => {
            let top = [],
                ref;

            for (let i = 0, k = slots.length; i < k; i++) {
              const slot = slots[i];

              // Ref is last known top level slot, if current slot is contained by it,
              // then that slot is nested and can be ignored
              if (!(ref && ref.contains(slot))) {
                top.push(slot);
                ref = slot;
              }
            }

            return top;
          })();

          topLevelSlots.forEach(slot => move(slot, host));
        }
      </script>
    </head>

    <body>
      <div id="app">
        <web-components-starter-container></web-components-starter-container>
      </div>
      <style>
        #app {
          margin: 0 auto;
        }
        @media (min-width: 300px) {
          #app {
            width: 80%;
          }
        }
        @media (min-width: 992px) {
          #app {
            width: 65%;
          }
        }
        @media (min-width: 1200px) {
          #app {
            width: 50%;
          }
        }
      </style>

      <!-- Required for IE11 -->
      <script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>

      <script defer src="https://rawgit.com/github/fetch/1.1/fetch.js"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/babel-polyfill/dist/polyfill.min.js"></script>

      <div id="ce-es5-shim">
        <script>
          if (!window.customElements) {
            var ceShimContainer = document.querySelector('#ce-es5-shim')

            // This prevents custom-elements-es5-adapter.js from parsing or running.
            ceShimContainer.parentElement.removeChild(ceShimContainer)
          }
        </script>

        <!-- Required, due to a conflict between the polyfills, transpilation, and IE... -->
        <script
          defer
          charset="utf-8"
          src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"
        ></script>
      </div>

      <!-- Web component polyfill (only loads what it needs) -->
      <script
        charset="utf-8"
        src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-lite.js"
      ></script>

      <!-- The actual Web component -->
      ${component}
    </body>

    </html>
  `
}

app.get('/', (req, res) => {
  // load components (do the container first)
  WebComponentsStarterContainerLoad()

  WebComponentsStarterBooleanRadioLoad()
  WebComponentsStarterInputLoad()
  WebComponentsStarterSelectLoad()

  render(new WebComponentsStarterContainer).then(component => {
    res.send(template(component))
  })
})

app.listen(8080, error => {
  if (error) {
    console.error(error) // eslint-disable-line no-console

    return
  }

  console.info(`==> 🌎  Listening on port ${8080} @ ${new Date()}.`) // eslint-disable-line max-len, no-console
})
