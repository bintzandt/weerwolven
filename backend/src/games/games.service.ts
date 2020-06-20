
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
  ) {}

  async save(game: Game): Promise<Game> {
    return await this.gamesRepository.save(game)
  }

  async findByPublicId(id: string): Promise<Game> {
    const game = await this.gamesRepository.findOne({ where: { publicid: id } })
    if(undefined == game) {
      throw new BadRequestException('Invalid game')
    }
    return game
  }
}