import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';

setPassiveTouchGestures(true);
setRootPath(SwarmCityGlobals.rootPath);

class WalletRouter extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
        <wallet-select name="select" page="[[page]]"></wallet-select>
        <wallet-send name="send" page="[[page]]"></wallet-send>
        <wallet-recieve name="recieve" page="[[page]]"></wallet-recieve>
      </iron-pages>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = 'select';
    } else if (['send', 'recieve'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'error';
    }
  }

  _pageChanged(page) {
    switch (page) {
      case 'select':
        import('./wallet-select.js');
        break;
      case 'send':
        import('./wallet-send.js');
        break;
      case 'recieve':
        import('./wallet-recieve.js');
        break;
      case 'error':
        import('../error-route.js');
        break;
    }
  }
}

window.customElements.define('wallet-router', WalletRouter);
