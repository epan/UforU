const connection = require('./dbConnection');
const mySearchFunction = require('./queryHelper.js').mySearchFunction;
const asyncMap = require('./queryHelper.js').asyncMap;
const querySchoolTable = require('./queryHelper.js').querySchoolTable;

module.exports = {
  colleges: {
    get: function(cb) {
      connection.query('SELECT * FROM Universities', function(err, results, fields) {
        if (err) {
          cb (err, null);
        } else {
          cb(null, results);
        }
      });
    },
    getSuggestions: function(params, cb) {
      mySearchFunction(params, function(err, data) {
        if (err) {
          cb(err, null);
        } else {
          cb(null, data);
        }
      });
    }
  },
  comments: {
    getAllByCollegeId: (id, cb) => {
      const sqlQuery = `SELECT * FROM Comments WHERE university_id=${id}`;
      connection.query(sqlQuery, (err, results, fields) => {
        if (err) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      });
    },
    addComment: (user, comment, universityId, cb) => {
      const sqlQuery = `INSERT INTO Comments (user, comment, university_id) VALUES ('${user}', '${comment}', ${universityId})`;
      connection.query(sqlQuery, (err, results, fields) => {
        if (err) {
          cb(err, null);
        } else {
          const output = {id: results.insertId, user: user, comment: comment};
          cb(null, output);
        }
      });
    }
  },
  college: {
    get: function(id, cb) {
      const sqlQuery = `SELECT name, description, website_url, image_url FROM universities WHERE id = ${id}`;
      connection.query(sqlQuery, function(err, results, fields) {
        if (err) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      });
    }
  }
};
