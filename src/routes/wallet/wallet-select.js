import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../css/css-shared.js';

class WalletSelect extends PolymerElement {
  static get template() {
    return html`
      <style include="css-shared"></style>
      <div class="container">
      </div>
    `;
  }
} window.customElements.define('wallet-select', WalletSelect);
