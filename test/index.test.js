const expect = require('chai').expect

const testLit = require('../dist_test/LitVideo');

describe('Library attached to DOM', function() {
    
    it('Window has litVideo', () => {
      expect(typeof window.litVideo).equal('object');
    });

    

})