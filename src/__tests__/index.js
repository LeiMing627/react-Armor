import should from 'should/as-function';
const { describe, it } = global;

import index from '../';
import ComplexClass from './fixtures/ComplexClass';

describe('sanity', () => {
  it('shouldjs should not extend Object.prototype', () => should(Object.prototype).not.have.property('should'));
  it('Complex class transforms should work', () => {
    const TEN = 10;
    const THIRTYFIVE = 35;
    const inst = new ComplexClass(TEN);
    should(inst).be.an.instanceOf(ComplexClass);
    should(inst.v).be.exactly(TEN);
    const multiplyByFortyFive = inst.multiplyByFortyFive;
    should(multiplyByFortyFive()).be.exactly(TEN * THIRTYFIVE);
  });
});

describe('index', () =>
  it('should export an object', () => should(index).be.an.Object())
);