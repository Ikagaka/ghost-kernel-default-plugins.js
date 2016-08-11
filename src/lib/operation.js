import {GhostKernelRoutings, GhostKernelControllers, GhostKernelController} from 'ghost-kernel';

export class OperationRouting {
  setup(routes) {
    routes.controller('OperationController', (routes) => {
      routes.from('GhostKernel', (routes) => {
        routes.event('initialize_informations_done', 'boot');
        routes.event('change_shell');
        routes.event('change_balloon');
        routes.event('close');
        routes.event('halt');
      });
    });
  }
}

// TODO 分け方がざっくりしている
export class OperationController extends GhostKernelController {
  constructor(kernel) {
    super(kernel);
  }

  async boot() {
    const shiorif = this.kernel.components.Shiorif;
    const profile = await this.kernel.profile();
    const boot_count = profile.boot_count || 0;
    profile.boot_count++;
    if (boot_count === 1) {
      const vanish_count = profile.vanish_count || 0;
      const transaction = await shiorif.get3('OnFirstBoot', [vanish_count]);
      this.kernel.emit('boot_done');
      if (transaction.response.to('3.0').status_line.code === 200) {
        await this.kernel.executeSakuraScript(transaction);
      } else {
        await shiorif.get3('OnBoot', this._bootHeaders(profile.shellname)).then(this.kernel.executeSakuraScript);
      }
      this.kernel.emit('boot_complete');
    } else {
      const transaction = await shiorif.get3('OnBoot', this._bootHeaders(profile.shellname));
      this.kernel.emit('boot_done');
      await this.kernel.executeSakuraScript(transaction);
      this.kernel.emit('boot_complete');
    }
    await this.kernel.profile(profile); // 起動が成功してから保存
  }

  _bootHeaders(shellname) {
    return {
      Reference0: shellname,
      Reference6: '', // TODO
      Reference7: '', // TODO
    };
  }

  async close(reason, all) {
    const shiorif = this.kernel.components.Shiorif;
    if (all) {
      const transaction = await shiorif.get3('OnCloseAll', [reason]);
      if (transaction.response.to('3.0').status_line.code === 200) {
        await this.kernel.executeSakuraScript(transaction);
      } else {
        await shiorif.get3('OnClose', [reason]).then(this.kernel.executeSakuraScript);
      }
    } else {
      await shiorif.get3('OnClose', [reason]).then(this.kernel.executeSakuraScript);
    }
    this.kernel.halt(reason); // スクリプトが\-を返さなかったとき対策
  }

  async halt(reason) {
    if (this.halting) return; // TODO
    this.halting = true;

    this.kernel.unregisterComponent('TimerEventSource');
    this.kernel.components.NamedKernelManager.components.NamedManager.vanish(this.kernel.components.Named.namedId);
    this.kernel.unregisterComponent('Named');
    await this.kernel.components.Shiorif.unload();
    this.kernel.unregisterComponent('Shiorif');
    this.kernel.components.NamedKernelManager.unregisterKernel(this.kernel.namedId);
    this.kernel.unregisterComponent('NamedKernelManager');
    this.kernel.unregisterComponent('GhostKernel');
  }

  change_shell(shellname) {
  }

  change_balloon(balloonname) {
  }
}

GhostKernelControllers.OperationController = OperationController;
GhostKernelRoutings.push(OperationRouting);
