import r from 'rethinkdb';
import { APP } from './config';

function please(fn) {
  try {
    fn()
  } catch(e) {
    return e
  }
};

class Database {

  constructor({ host = APP.db, db = APP.dbname, table }) {
    Object.assign(this, { host, db, table });

    function createTable(conn) {
      return (err, d) => {
        if (this.table) {
          r.db(this.db).tableList()
            .contains(this.table)
            .do(tableExists => r.branch(tableExists, { tbs_created: 0 }, r.db(this.db).tableCreate(this.table)))
            .run(conn)
        }
      };
    }

    r.connect({ host })
      .then((conn) => {
        r.dbList()
          .contains(this.db)
          .do(dbExists => r.branch(dbExists, { dbs_created: 0 }, r.dbCreate(this.db)))
          .run(conn, createTable.call(this, conn))
      })
  }

  getConnection() {
    return new Promise((resolve, reject) => {
      r.connect({ host: this.host })
        .then(resolve)
        .catch(reject);
    });
  }

  exec(fn, errCb = function() {}) {
    return this.getConnection().then(fn).catch(errCb);
  }

  getDB() {
    return this.table ? r.db(this.db).table(this.table) : r.db(this.db);
  }

  filter(o) {
    try {
      if (!this.table) throw error
      return new Promise((resolve, reject) => {
        this.exec((conn) => {
          this.getDB()
            .filter(o)
            .run(conn, (err, result) => {
              if (err) reject(err)
              else resolve(result);
            });
        });
      });
    } catch(e) {
      return e;
    }
  }

  insert(o) {
    return new Promise((resolve, reject) => {
      this.exec((conn) => {
        this.getDB()
          .insert(o, { returnChanges: true })
          .run(conn, (err, result) => {
            if (err) reject(err)
            else resolve(result);
          });
      });
    });
  }

}

export default Database;
