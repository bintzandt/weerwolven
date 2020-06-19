import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesController } from './games/games.controller';
import { Role } from './players/player.entity';
import { GamesService } from './games/games.service';

describe('AppController', () => {
  let appController: AppController;
  let gamesController: GamesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController, GamesController],
      providers: [AppService, GamesService],
    }).compile();

    appController = app.get<AppController>(AppController);
    gamesController = app.get<GamesController>(GamesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('Get Roles', () => {
    it('should give the roles', () => {
      expect(gamesController.getRoles()).toStrictEqual(['Burger', 'Weerwolf'])
    })
  })

  // describe('Create Game', () => {
  //   it.only('Should create a game', () => {
  //     expect(gamesController.createGame({date: new Date(), roles: [Role.Burger]})).toStrictEqual('randomgametoken')
  //   })
  // })
});
