import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class CounterA extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <button>A+</button>
      <p>child A: [[counter]]</p>
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

window.customElements.define('counter-a', CounterA);
