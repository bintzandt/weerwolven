import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany } from "typeorm";
import { User } from "../users/user.entity";
import { Game } from "../games/game.entity";

enum GameStatus {
	Alive,
	Dead,
}

enum Aura {
    Good,
    Bad,
    Neutral
}

enum Group {
    Village,
}

export enum Role {
	Burger = "Burger",
	Weerwolf = "Weerwolf",
}

@Entity({
	name: 'players',
})
export class Player {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
    name: string;

    @ManyToOne(type => User, user => user.players )
    user: User;
    
    @ManyToOne(type => Game, game => game.players)
    game: Game;

	@Column({
		type: 'enum',
		enum: Role,
	})
	role: Role;

	@Column({
		type: 'enum',
		enum: Aura,
	})
	aura: Aura;

	@Column({
		type: 'enum',
		enum: Group,
	})
	group: Group;

	@Column({
		type: 'enum',
		enum: GameStatus,
	})
	status: GameStatus;
}