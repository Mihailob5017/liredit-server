import { MikroORM } from '@mikro-orm/core';

const main = async () => {
	console.log('hello  woyatnrld');
	const orm = await MikroORM.init({
		dbName: 'lireddit',
		user: 'postgres',
		password: 'jsmv4183',
		debug: process.env.NODE_ENV !== 'production',
		type: 'postgresql',
	});
};

main();
