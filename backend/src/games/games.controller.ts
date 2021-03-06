import { Controller, Get, Post, Put, Param } from '@nestjs/common';

@Controller({
	path: 'game',
})
export class GamesController {
  @Post()
  createGame(): string {
    return "create game";
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
