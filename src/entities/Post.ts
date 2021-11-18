import { Property, Entity, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Post {
	@PrimaryKey()
	id!: number;

	@Property()
	createadAt = new Date();

	@Property({ onUpdate: () => new Date() })
	updatedAt = new Date();

	@Property()
	title!: string;
}
