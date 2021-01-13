import { html, TemplateResult } from 'lit-element';
import { makeObservable, observable } from 'mobx';
import Navigo from 'navigo';
class MobxStore {
  router = new Navigo('/');
  route: TemplateResult = html``;

  constructor() {
    makeObservable(this, { route: observable });

    this.init();
  }

  async init() {
    this.router
      .on(() => {
        this.route = html`<h2>Page Default</h2> `;
      })
      .on('help', () => {
        console.log('calling the help page');
        this.route = html`<h2>HELP ME!</h2>`;
      });
    this.router.resolve();
    console.log(this.router.routes);
  }
}

export default new MobxStore();
