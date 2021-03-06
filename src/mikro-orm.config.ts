import { Post } from './entities/Post';
import { __prod__ } from './constants';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

console.log(__dirname);
export default {
	migrations: {
		path: path.join(__dirname, './migrations'), // path to the folder with migrations
		pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
	},
	entities: [Post],
	dbName: 'lireddit',
	password: 'jsmv4183',
	debug: !__prod__,
	type: 'postgresql',
} as Parameters<typeof MikroORM.init>[0];
