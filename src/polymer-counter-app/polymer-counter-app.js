import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../_element/counter-a'
import '../_element/counter-b'

/**
 * @customElement
 * @polymer
 */
class PolymerCounterApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
     
      <h2>Sum(A + B) = [[_add(counterA, counterB)]]</h2>
      <p>parentA: {{counterA}}<p>
      <counter-a counter="{{counterA}}"><counter-a>
      
      <p>parentB: {{counterB}}</p>
      <counter-b counter="{{counterB}}"><counter-b>
    `;
  }
  _add (a, b) {
    return a + b;
  }
}

window.customElements.define('polymer-counter-app', PolymerCounterApp);
