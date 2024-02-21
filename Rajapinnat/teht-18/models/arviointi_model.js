const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from arviointi where idArviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (idOpiskelija, idOpintojakso, Paivamaara, Arvosana) values(?,?,?,?)',
      [arviointi.idOpiskelija, arviointi.idOpintojakso, arviointi.Paivamaara, arviointi.Arvosana],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set idOpiskelija=?, idOpintojakso=?, Paivamaara=?, Arvosana=? where idArviointi=?',
      [arviointi.idOpiskelija, arviointi.idOpintojakso, arviointi.Paivamaara, arviointi.Arvosana, id],
      callback
    );
  }
};
module.exports = arviointi;