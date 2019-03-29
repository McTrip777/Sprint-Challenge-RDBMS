const db = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
  get,
  insert,
  remove
}
function get(id) {
    let query = db('actions');

    if (id) {
      return query
        .where('id', id)
        .first()
        .then(action => mappers.actionToBody(action));
    }

    return query.then(actions => {
      return actions.map(action => mappers.actionToBody(action));
    });
  }
function insert(action) {
    return db('actions')
      .insert(action)
      .then(([id]) => this.get(id));
  }
function remove(id) {
    return db('actions')
      .where('id', id)
      .del();
  }
