const { expect } = require('chai');
const User = require('../../src/services/user');

describe('User', () => {
  describe('getUserWithCallback', () => {
    it('devrait retourner un utilisateur avec un ID valide', (done) => {
      User.getUserWithCallback(1, (err, user) => {
        expect(err).to.be.null;
        expect(user).to.have.property('id', 1);
        expect(user).to.have.property('name', 'Utilisateur 1');
        done();
      });
    });

    it('devrait retourner une erreur avec un ID invalide', (done) => {
      User.getUserWithCallback(0, (err, user) => {
        expect(err).to.be.an('error');
        expect(err.message).to.equal('ID invalide');
        expect(user).to.be.null;
        done();
      });
    });
  });
});