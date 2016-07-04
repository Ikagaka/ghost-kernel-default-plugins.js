import {GhostKernelRoutings, GhostKernelControllers, GhostKernelController} from 'ghost-kernel';

export class InformationRouting {
  setup(routes) {
    routes.controller('InformationController', (routes) => {
      routes.event('GhostKernel', 'protocol_version_fixed', 'initialize_informations');
    });
  }
}

export class InformationController extends GhostKernelController {
  constructor(kernel) {
    super(kernel);
    kernel.components.Information = new Information();
  }

  initialize_informations() {
    const kernel = this.kernel;
    const Information = kernel.components.Information;
    const shiorif = kernel.components.Shiorif;
    Promise.all(
      [
        shiorif.request3('GET', 'username').then(({response}) =>
          Information.username = response.headers.header.Value
        ),
      ].concat([
        'sakura.recommendsites',
        'sakura.portalsites',
        'kero.recommendsites',
      ].map((id) =>
        shiorif.request3('GET', id).then(({response}) => {
          Information[id].length = 0; // clear
          response.headers.get_separated2('Value').forEach((site) =>
            Information[id].push(new SiteMenu(...site))
          );
        })
      ))
    ).then(
      () => kernel.emit('initialize_informations_done')
    );
  }
}

export class Information {
  constructor() {
    this['_sakura.recommendsites'] = [];
    this['_sakura.portalsites'] = [];
    this['_kero.recommendsites'] = [];
  }

  /**
   * ユーザー名
   * @type {string}
   */
  get username() { return this._username; }
  /**
   * ユーザー名
   * @type {string}
   */
  set username(value) { this._username = value; }

  /**
   * sakura.recommendsites
   * @type {SiteMenu[]}
   */
  get ['sakura.recommendsites']() { return this['_sakura.recommendsites']; }

  /**
   * sakura.portalsites
   * @type {SiteMenu[]}
   */
  get ['sakura.portalsites']() { return this['_sakura.portalsites']; }

  /**
   * kero.recommendsites
   * @type {SiteMenu[]}
   */
  get ['kero.recommendsites']() { return this['_kero.recommendsites']; }
}

export class SiteMenu {
  /**
   * @param {string} name 項目名
   * @param {string} url URL
   * @param {string} banner バナー画像パス
   * @param {string} script 選択時トークスクリプト
   */
  constructor(name, url, banner, script) {
    this._name = name;
    this._url = url;
    this._banner = banner;
    this._script = script;
  }

  /**
   * 項目名
   * @type {string}
   */
  get name() { return this._name; }

  /**
   * URL
   * @type {string}
   */
  get url() { return this._url; }

  /**
   * バナー画像パス
   * @type {string}
   */
  get banner() { return this._banner; }

  /**
   * 選択時トークスクリプト
   * @type {string}
   */
  get script() { return this._script; }
}

GhostKernelControllers.InformationController = InformationController;
GhostKernelRoutings.push(InformationRouting);
