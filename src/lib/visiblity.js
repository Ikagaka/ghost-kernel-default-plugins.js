import {GhostKernelRoutings, GhostKernelControllers, GhostKernelController} from 'ghost-kernel';
import {EventEmitter} from 'events';

export class VisibilityRouting {
  setup(routes) {
    routes.controller('VisibilityController', (routes) => {
      routes.event('GhostKernel', 'start');
      routes.event('GhostKernel', 'halt');
      routes.event('Visibility', 'visibilityChange');
    });
  }
}

/** 可視性モデル */
export class Visibility extends EventEmitter {
  /**
   * @param {boolean} initialVisibility 初期可視状態 autoが真の時は無視される
   * @param {boolean} auto 自動で可視性を判定する Page Visibility APIがある場合はデフォルトで真
   */
  constructor(initialVisibility = true, auto = typeof document !== 'undefined') {
    super();
    this._nativeVisibilityChange = this._nativeVisibilityChange.bind(this);
    if (initialVisibility !== undefined) {
      this._visibility = initialVisibility;
    }
    if (auto) this.watchVisibility();
  }

  watchVisibility() {
    // hidden プロパティおよび可視性の変更イベントの名前を設定
    if (typeof document.hidden !== "undefined") { // Opera 12.10 や Firefox 18 以降でサポート
      this.hiddenProperty = "hidden";
      this.visibilityChangeProperty = "visibilitychange";
    } else if (typeof document.mozHidden !== "undefined") {
      this.hiddenProperty = "mozHidden";
      this.visibilityChangeProperty = "mozvisibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      this.hiddenProperty = "msHidden";
      this.visibilityChangeProperty = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      this.hiddenProperty = "webkitHidden";
      this.visibilityChangeProperty = "webkitvisibilitychange";
    }
    if (typeof document[this.hiddenProperty] !== 'undefined') {
      document.addEventListener(this.visibilityChangeProperty, this._nativeVisibilityChange, false);
      this._visibility = !document[this.hiddenProperty];
    }
  }

  unwatchVisibility() {
    document.removeEventListener(this.visibilityChangeProperty, this._nativeVisibilityChange, false);
  }

  _nativeVisibilityChange() {
    this.visibility = !document[this.hiddenProperty];
  }

  set visibility(visibility) {
    const needEmit = this._visibility !== (!!visibility);
    this._visibility = !!visibility;
    if (needEmit) this.emit('visibilityChange', this._visibility);
  }

  get visibility() {
    return this._visibility;
  }
}

export class VisibilityController extends GhostKernelController {
  constructor(kernel) {
    super(kernel);
  }

  start() {
    this.kernel.registerComponent('Visibility', new Visibility());
  }

  halt() {
    this.kernel.components.Visibility.unwatchVisibility();
    this.kernel.unregisterComponent('Visibility');
  }

  visibilityChange(visibility) {
    if (visibility) {
      this.kernel.components.Shiorif.get3('OnWindowStateRestore').then(this.kernel.executeSakuraScript);
    } else {
      this.kernel.components.Shiorif.get3('OnWindowStateMinimize').then(this.kernel.executeSakuraScript);
    }
  }
}

GhostKernelControllers.VisibilityController = VisibilityController;
GhostKernelRoutings.push(VisibilityRouting);
