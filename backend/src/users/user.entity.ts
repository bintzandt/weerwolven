import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Player } from 'src/players/player.entity';
import { Game } from 'src/games/game.entity';

@Entity({
	name: 'users',
})
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	firstName: string;

	@OneToMany(type => Game, game => game.gameMaster )
	games: Game[];
	
	@Column()
	lastName: string;

	@OneToMany(type => Player, player => player.user)
	players: Player[]
}