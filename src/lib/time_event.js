import {GhostKernelRoutings, GhostKernelControllers, GhostKernelController} from 'ghost-kernel';

export class TimeEventRouting {
  setup(routes) {
    routes.controller('TimeEventController', (routes) => {
      routes.event('GhostKernel', 'protocol_version_fixed', 'enable_time_events'); // TODO
      routes.from('TimerEventSource', (routes) => {
        routes.event('second_change');
        routes.event('minute_change');
      });
    });
  }
}

export class TimerState {
  constructor(initialized_time = new Date()) {
    /**
     * @type {Boolean}
     */
    this.enabled = false;
    /**
     * @type {Date}
     */
    this.initialized_time = initialized_time;
  }
}

export class TimeEventController extends GhostKernelController {
  constructor(kernel) {
    super(kernel);
    kernel.components.TimerState = new TimerState();
  }

  enable_time_events() {
    this.kernel.components.TimerState.enabled = true;
  }

  second_change() {
    if (!this.kernel.components.TimerState.enabled) return;
    const kernel = this.kernel;
    const Information = kernel.components.Information;
    const shiorif = kernel.components.Shiorif;
    shiorif.request3('GET', 'OnSecondChange', this._time_headers())
      .then((transaction) => 1); // TODO
  }

  menute_change() {
    if (!this.kernel.components.TimerState.enabled) return;
    const kernel = this.kernel;
    const Information = kernel.components.Information;
    const shiorif = kernel.components.Shiorif;
    shiorif.request3('GET', 'OnSecondChange', this._time_headers())
      .then((transaction) => 1); // TODO
  }

  _time_headers() {
    const uptime = 0; // TODO: ブラウザでOSのuptimeは取得できない
    const mikire = 0; // TODO: Shell modelを参照する
    const overlapped = 0; // TODO: Shell modelを参照する
    const cantalk = 1; // TODO: status modelを参照する
    const left_time = 0; // TODO: SSPでのOSの放置時間の処理方法依存
    return {
      Reference0: uptime,
      Reference1: mikire,
      Reference2: overlapped,
      Reference3: cantalk,
      Reference4: left_time,
    };
  }
}

GhostKernelControllers.TimeEventController = TimeEventController;
GhostKernelRoutings.push(TimeEventRouting);
