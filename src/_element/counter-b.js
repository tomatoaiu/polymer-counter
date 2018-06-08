import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class CounterB extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <button>B+</button>
      <p>child B: [[counter]]</p>
    `;
  }
  static get properties() {
    return {
      counter: {
        type: Number,
        value: 0,
        notify: true,
      }
    };
  }
  constructor() {
    super();
    this.addEventListener('click', this.add.bind(this));
  }
  add() {
    this.counter++;
  }
}

window.customElements.define('counter-b', CounterB);
