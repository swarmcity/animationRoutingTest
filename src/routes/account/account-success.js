import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../css/css-shared.js';

class AccountSuccess extends PolymerElement {
  static get template() {
    return html`
      <style include="css-shared"></style>
      <div class="container">
      </div>
    `;
  }
} window.customElements.define('account-success', AccountSuccess);
