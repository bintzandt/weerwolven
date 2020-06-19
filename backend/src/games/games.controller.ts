import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { Role } from "../players/player.entity"
import { GamesService } from './games.service';
import { Game } from './game.entity';

class GameDTO {
  date: Date
  roles: Role[]
}
@Controller({
	path: 'game',
})
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get('roles')
  getRoles() : object {
    return Object.keys(Role)
  }

  @Post()
  createGame(@Body() message: GameDTO): object {
    const game: Game = new Game()
    game.startDate = new Date(message.date)
    const returned = this.gamesService.save(game)
    return returned;
  }

  @Put(':id')
  updateGame( @Param('id') id: number ): string {
      return `update game: ${id}`;
  }

  @Get(':id')
  getGame(@Param('id') id: number ): string {
      return `game info: ${id}`;
  }
  
  @Get('join/:token')
  joinGame(@Param('token') token: string): string {
      return `joining game: ${token}`;
  }

  @Post('action/:id')
  doAction(@Param('id') id: number): string {
      return `voting in game: ${id}`;
  }
}
