import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "src/users/user.entity";
import { Player } from "src/players/player.entity";

@Entity({
	name: 'games',
})
export class Game {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: "date"})
    startDate: Date;

    @ManyToOne(type => User, user => user.games )
    gameMaster: User;
    
    @OneToMany(type => Player, player => player.game)
    players: Player[];

    // [VotingRound]
}