import {plugins} from '../src/lib/ghost-kernel-default-plugins';
import {GhostKernel} from 'ghost-kernel';

import assert from 'power-assert';

/** @test {GhostKernel} */
describe('GhostKernel', function() {
  lazy('instance', function() { return new GhostKernel({a: 1}) });
  /** @test {GhostKernel#constructor} */
  context('constructor', function() {
    it('basic', function() { assert(this.instance instanceof GhostKernel) });
  });
});
