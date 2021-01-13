import {
  html,
  css,
  customElement,
  property,
  CSSResult,
  TemplateResult,
} from 'lit-element';
import { MobxLitElement } from '@adobe/lit-mobx';
import Store from './store';

@customElement('app-main')
export class AppMain extends MobxLitElement {
  @property() private store = Store;

  static get styles(): CSSResult {
    return css``;
  }

  // Implement `render` to define a template for your element.
  render(): TemplateResult {
    return html`
      <h1>Navigo Test</h1>
      ${this.store.route}
      <br />
      <button @click="${() => this.gotoHelp('/')}">Home</button>
      <button @click="${() => this.gotoHelp('help')}">Help</button>
      <br /><a href="/help" data-navigo>help</a>
    `;
  }
  firstUpdated() {
    this.store.router.updatePageLinks();
  }
  gotoHelp(route: string) {
    this.store.router.navigate(route);
  }
}
