import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import mikroOrmConfig from './mikro-orm.config';
const main = async () => {
	const orm = await MikroORM.init(mikroOrmConfig);
	// Create Post
	const post = orm.em.create(Post, { title: 'my first post' });
	// Insert Post in DB
	await orm.em.persistAndFlush(post);
	console.log('--------------------sql2--------------');
	await orm.em.nativeInsert(Post, { title: 'My first post 2' });
};

main().catch((err) => console.error(err));
