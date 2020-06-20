import { Test, TestingModule } from '@nestjs/testing';
import { GamesController } from './games/games.controller';
import { GamesService } from './games/games.service';

describe('AppController', () => {
  let gamesController: GamesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GamesController],
      providers: [GamesService],
    }).compile();

    gamesController = app.get<GamesController>(GamesController);
  });

  // fails with error?
  describe('Get Roles', () => {
    it('should give the roles', () => {
      expect(gamesController.getRoles()).toStrictEqual(['Burger', 'Weerwolf'])
    })
  })
});
