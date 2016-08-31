import {SanaJK} from 'sanajk';
import {Shiorif} from 'shiorif';

import {RoutableComponentRoutes} from 'routable-component';
import {GhostKernel} from 'ghost-kernel';
import {VersionRouting, Version, VersionController} from '../src/lib/version';

import assert from 'power-assert';

console.log('log');
console.info('info');
console.error('error');

describe('VersionController', function() {
  lazy('events', function() {
    return {
      _load() {},
      _unload() {},
      version(request) {
        return '1.0.0';
      },
      name(request) {
        return 'sanajk';
      },
      craftman(request) {
        return 'Narazaka';
      },
      craftmanw(request) {
        return '奈良阪';
      },
    };
  });
  lazy('shiori', function() { return new SanaJK(this.events); });
  lazy('Shiorif', function() { return new Shiorif(this.shiori); });
  lazy('routings', function() { return [VersionRouting]; });
  lazy('kernel', function() { return new GhostKernel({Shiorif: this.Shiorif}, new RoutableComponentRoutes(this.routings)); });
  describe('kernel initialize', function() {
    it('works', function() { assert(this.kernel instanceof GhostKernel); });
  });
  describe('GhostKernel > start', function() {
    it('works', function(done) {
      this.kernel.on('protocol_version_fixed', () => {
        try {
          const version = this.kernel.components.Version;
          assert(version);
          assert(version.version === '1.0.0');
          assert(version.name === 'sanajk');
          assert(version.craftman === 'Narazaka');
          assert(version.craftmanw === '奈良阪');
          done();
        } catch (error) {
          done(error);
        }
      });
      this.kernel.emit('start');
    });
  });
  describe('GhostKernel > start > halt', function() {
    it('works', function(done) {
      // this.timeout(500);
      this.kernel.on('protocol_version_fixed', () => {
        assert(this.kernel.components.Version);
        this.kernel.emit('halt');
        setTimeout(() => {
          try {
            assert(!this.kernel.components.Version);
            done();
          } catch (error) {
            done(error);
          }
        }, 0);
      });
      this.kernel.emit('start');
    });
  });
});
