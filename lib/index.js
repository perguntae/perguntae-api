import app from './app';
import { APP } from './config';
import r from 'rethinkdb';

function startApp(c) {
	app._rdbConn = c;
	app.listen(APP.port, () => {
	  console.log(`App listening on port ${APP.port}. ;)`);
	});
};

r.connect({ 
		host: APP.db,
		db: 'perguntae'
	})
	.then(c => {
		r.tableList().run(c, (err, tables) => {
			if (err) console.log('ERROR')
			else {
				if (tables.indexOf('rooms') > -1) {
					startApp(c);
				} else {
					r.tableCreate('rooms').run(c, (err, table) => {
						startApp(c);
					})
				}
			}
		})		
	})
	.catch(err => {
		console.log('There was an error connection to the DB');
	});
