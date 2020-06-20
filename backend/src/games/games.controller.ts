import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { Role } from "../players/player.entity"
import { GamesService } from './games.service';
import { Game } from './game.entity';
import { randomBytes } from "crypto"

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

  getHexToken(length: number) {
    return randomBytes(length).toString('hex')
  }

  @Post()
  async createGame(@Body() message: GameDTO) {
    const game: Game = new Game()
    game.startDate = new Date(message.date)
    game.roles = message.roles
    game.publicid = this.getHexToken(4)

    const returned = await this.gamesService.save(game)
    return {publicid: returned.publicid};
  }

  @Put(':id')
  updateGame( @Param('id') id: number ): string {
      return `update game: ${id}`;
  }

  @Get(':id')
  async getGame(@Param('id') id: string ) {
      return await this.gamesService.findByPublicId(id);
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
