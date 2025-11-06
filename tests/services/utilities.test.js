const { expect } = require('chai');
const { addition } = require('../../src/services/utilities');

describe('Utilities', () => {
  describe('addition', () => {
    it('devrait additionner deux nombres positifs', () => {
      expect(addition(2, 3)).to.equal(5);
    });

    it('devrait additionner des nombres négatifs', () => {
      expect(addition(-2, -3)).to.equal(-5);
    });

    it('devrait additionner zéro', () => {
      expect(addition(5)).to.equal(5);
    });
  });
});