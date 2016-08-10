import {GhostKernelRoutings, GhostKernelControllers, GhostKernelController} from 'ghost-kernel';

export class TimeEventRouting {
  setup(routes) {
    routes.controller('TimeEventController', (routes) => {
      routes.event('GhostKernel', 'boot_done', 'enable_time_events'); // TODO いつが最初なのが正しい?
      routes.from('TimerEventSource', (routes) => {
        routes.event('second_change');
        routes.event('minute_change');
      });
    });
  }
}

export class TimerEventState {
  constructor(initializedTime = new Date()) {
    /** * @type {Boolean} */
    this.enabled = false;
    /** * @type {Date} */
    this.initializedTime = initializedTime;
  }
}

export class TimeEventController extends GhostKernelController {
  constructor(kernel) {
    super(kernel);
    kernel.registerComponent('TimerEventState', new TimerEventState());
  }

  enable_time_events() {
    this.kernel.components.TimerEventState.enabled = true;
  }

  second_change() {
    if (!this.kernel.components.TimerEventState.enabled) return;
    const kernel = this.kernel;
    const Information = kernel.components.Information;
    const shiorif = kernel.components.Shiorif;
    if (this._cantalk()) {
      shiorif.get3('OnSecondChange', this._time_headers()).then(this.kernel.executeSakuraScript);
    } else {
      shiorif.notify3('OnSecondChange', this._time_headers()); // TODO: error handling
    }
  }

  menute_change() {
    if (!this.kernel.components.TimerEventState.enabled) return;
    const kernel = this.kernel;
    const Information = kernel.components.Information;
    const shiorif = kernel.components.Shiorif;
    if (this._cantalk()) {
      shiorif.get3('OnMinuteChange', this._time_headers()).then(this.kernel.executeSakuraScript);
    } else {
      shiorif.notify3('OnMinuteChange', this._time_headers()); // TODO: error handling
    }
  }

  _time_headers() {
    const uptime = 0; // TODO: ブラウザでOSのuptimeは取得できない
    const mikire = 0; // TODO: Shell modelを参照する
    const overlapped = 0; // TODO: Shell modelを参照する
    const cantalk = this._cantalk(); // TODO: status modelを参照する
    const left_time = 0; // TODO: SSPでのOSの放置時間の処理方法依存
    return {
      Reference0: uptime,
      Reference1: mikire,
      Reference2: overlapped,
      Reference3: cantalk,
      Reference4: left_time,
    };
  }

  _cantalk() {
    const shellState = this.kernel.components.ShellState;
    return shellState.timeCritical ? 0 : 1;
  }
}

GhostKernelControllers.TimeEventController = TimeEventController;
GhostKernelRoutings.push(TimeEventRouting);
