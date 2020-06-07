import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Game } from "./game.entity";
import { GamesController } from "./games.controller";

@Module({
	imports: [TypeOrmModule.forFeature([Game])],
	controllers: [GamesController],
})
export class GamesModule {}