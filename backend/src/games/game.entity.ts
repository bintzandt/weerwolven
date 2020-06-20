import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "../users/user.entity";
import { Player, Role } from "../players/player.entity";

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

    @Column({ type: 'varchar', transformer: {to: roles => JSON.stringify(roles), from: roles => JSON.parse(roles).map(el => Role[el])} })
    roles: Role[];

    @Column()
    publicid: string

    // [VotingRound]
}