const expect = require('chai').expect;
const assert = require('chai').assert;

const testLit = require('../dist_test/LitVideo');

describe('Library attached to DOM', function() {
    
    it('Window has litVideo', () => {
      expect(typeof window.litVideo).equal('object');
    });

    it('Library has a init function', ()=>{
      assert.isFunction(window.litVideo.init, "Init cannot be found!");
    })
})