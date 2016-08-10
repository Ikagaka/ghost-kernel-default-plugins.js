import {GhostKernelRoutings, GhostKernelControllers, GhostKernelController} from 'ghost-kernel';

export class NotifyInformationRouting {
  setup(routes) {
    routes.controller('NotifyInformationController', (routes) => {
      routes.event('GhostKernel', 'protocol_version_fixed', 'initialize');
    });
  }
}

export class NotifyInformationController extends GhostKernelController {
  constructor(kernel) {
    super(kernel);
  }

  async initialize() {
    await this.ownerghostname();
    await this.otherghostname();
    await this.basewareversion();
    await this.capability();
    await this.OnNotifyOSInfo();
    await this.OnNotifyFontInfo();
    await this.OnNotifySelfInfo();
    await this.OnNotifyBalloonInfo();
    await this.OnNotifyShellInfo();
    await this.OnNotifyUserInfo();
    await this.OnNotifyDressupInfo();
    await this.OnNotifyBrowserInfo();
    await this.ghostpathlist();
    await this.balloonpathlist();
    await this.installedghostname();
    await this.installedballoonname();
    await this.installedshellname();
    await this.rateofusegraph();
    await this.uniqueid();
    this.kernel.emit('notify_informations_done');
  }

  ownerghostname() {
    return this.kernel.components.Shiorif.notify3('ownerghostname', [this.kernel.ghostDescript.name]);
  }

  otherghostname() {
    // TODO ここでこの実装してよいのか
    const namedKernelManager = this.kernel.components.NamedKernelManager;
    const names = namedKernelManager.namedIds()
      .map((namedId) => namedKernelManager.kernel(namedId))
      .filter((kernel) => kernel.ghostDescript)
      .map((kernel) => [
        kernel.ghostDescript.name,
        kernel.components.Named.scopes[0].surface().surfaceId,
        kernel.components.Named.scopes[1] ? kernel.components.Named.scopes[1].surface().surfaceId : '',
      ].join('\u0001'));
    return this.kernel.components.Shiorif.notify3('otherghostname', [names]);
  }

  basewareversion() {
    // TODO バージョンとか
    return this.kernel.components.Shiorif.notify3('basewareversion', ['0.1.0', 'Ikagaka']);
  }

  capability() {
    return this.kernel.components.Shiorif.notify3('capability', [
      'response.requestcharset',
    ]);
  }

  async OnNotifyOSInfo() {
    // TODO
  }

  async OnNotifyFontInfo() {
    // TODO
    // https://github.com/Pomax/Font.js or http://www.lalit.org/lab/javascript-css-font-detect/
  }

  OnNotifySelfInfo() {
    // TODO abs path
    return this.kernel.components.Shiorif.notify3('OnNotifySelfInfo', [
      this.kernel.ghostDescript.name,
      this.kernel.ghostDescript['sakura.name'],
      this.kernel.ghostDescript['kero.name'],
      this.kernel.shellDescript['name'],
      null,
      this.kernel.balloonDescript['name'],
      null,
    ]);
  }

  OnNotifyBalloonInfo() {
    // TODO
    return this.kernel.components.Shiorif.notify3('OnNotifyBalloonInfo', [
      this.kernel.balloonDescript['name'],
      null,
      null,
    ]);
  }

  OnNotifyShellInfo() {
    // TODO
    return this.kernel.components.Shiorif.notify3('OnNotifyShellInfo', [
      this.kernel.shellDescript['name'],
      null,
      null,
    ]);
  }

  async OnNotifyUserInfo() {
    // TODO
  }

  async OnNotifyDressupInfo() {
    // TODO
  }

  OnNotifyBrowserInfo() {
    // TODO
  }

  async ghostpathlist() {
    // TODO
  }

  async balloonpathlist() {
    // TODO
  }

  async installedghostname() {
    const names = await this.kernel.components.NanikaStorage.ghost_names();
    return this.kernel.components.Shiorif.notify3('installedghostname', names);
  }

  async installedballoonname() {
    const names = await this.kernel.components.NanikaStorage.balloon_names();
    return this.kernel.components.Shiorif.notify3('installedballoonname', names);
  }

  async installedshellname() {
    const names = await this.kernel.components.NanikaStorage.shell_names(this.kernel.namedId);
    return this.kernel.components.Shiorif.notify3('installedshellname', names);
  }

  async rateofusegraph() {
    // TODO
  }

  async uniqueid() {
    // TODO
  }
}

GhostKernelControllers.NotifyInformationController = NotifyInformationController;
GhostKernelRoutings.push(NotifyInformationRouting);
