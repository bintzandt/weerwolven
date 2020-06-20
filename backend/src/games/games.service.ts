
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

  async findAll(): Promise<Game[]> {
    return this.gamesRepository.find();
  }

  async findByPublicId(id: string): Promise<Game> {
    const game = await this.gamesRepository.findOne({ where: { publicid: id } })
    if(undefined == game) {
      throw new BadRequestException('Invalid game')
    }
    return game
  }

  async findOne(id: any): Promise<Game> {
    return this.gamesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.gamesRepository.delete(id);
  }
}