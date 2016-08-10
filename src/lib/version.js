import {GhostKernelRoutings, GhostKernelControllers, GhostKernelController} from 'ghost-kernel';

export class VersionRouting {
  setup(routes) {
    routes.controller('VersionController', (routes) => {
      routes.event('GhostKernel', 'start');
    });
  }
}

export class Version {
  /** @type {string} */
  get name() { return this._name; }
  /** @type {string} */
  set name(value) { this._name = value; }
  /** @type {string} */
  get version() { return this._version; }
  /** @type {string} */
  set version(value) { this._version = value; }
  /** @type {string} */
  get craftman() { return this._craftman; }
  /** @type {string} */
  set craftman(value) { this._craftman = value; }
  /** @type {string} */
  get craftmanw() { return this._craftmanw; }
  /** @type {string} */
  set craftmanw(value) { this._craftmanw = value; }
}

export class VersionController extends GhostKernelController {
  constructor(kernel) {
    super(kernel);
    kernel.registerComponent('Version', new Version());
  }

  start() {
    const kernel = this.kernel;
    const Version = kernel.components.Version;
    const shiorif = kernel.components.Shiorif;
    // shiorif.allow_async_request = false; // 将来的に非同期リクエストをサポートする場合
    shiorif.auto_convert_request_version = '2.6';
    shiorif.default_headers = {
      Charset: 'UTF-8',
      Sender: 'ikagaka',
    };
    shiorif.get3('version')
      .then(
        ({response}) => {
          const status_line = response.status_line;
          const code = status_line.code;
          const version = status_line.version;
          // support 2.6 not 1.x
          if (code === 200 && version !== '3.0' && version !== '4.0') {
            const header = response.headers.header;
            Version.version = '2.6';
            Version.name = header.ID;
            Version.craftman = header.Craftman;
            Version.craftmanw = header.Craftman;
            kernel.emit('protocol_version_fixed');
          } else {
            // support 3.0 or 4.0
            if (version !== '4.0') {
              shiorif.auto_convert_request_version = '3.0';
            } else {
              shiorif.auto_convert_request_version = '4.0';
            }
            return Promise.all([
              shiorif.request3('GET', 'version')
                .then(
                  ({response}) => {
                    Version.version = response.headers.header.Value;
                  }
                ),
              shiorif.request3('GET', 'name')
                .then(
                  ({response}) => {
                    Version.name = response.headers.header.Value;
                  }
                ),
              shiorif.request3('GET', 'craftman')
                .then(
                  ({response}) => {
                    Version.craftman = response.headers.header.Value;
                  }
                ),
              shiorif.request3('GET', 'craftmanw')
                .then(
                  ({response}) => {
                    Version.craftmanw = response.headers.header.Value;
                  }
                ),
            ]).then(
              () => kernel.emit('protocol_version_fixed')
            );
          }
        }
      );
  }
}

GhostKernelControllers.VersionController = VersionController;
GhostKernelRoutings.push(VersionRouting);
