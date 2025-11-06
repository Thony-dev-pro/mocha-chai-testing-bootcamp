class User {
  static getUserWithCallback(id, callback) {
    setTimeout(() => {
      if (id <= 0) {
        return callback(new Error('ID invalide'), null);
      }
      callback(null, { id, name: `Utilisateur ${id}` });
    }, 100);
  }
}

module.exports = User;