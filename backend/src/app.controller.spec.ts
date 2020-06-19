import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesController } from './games/games.controller';

describe('AppController', () => {
  let appController: AppController;
  let gamesController: GamesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController, GamesController],
      providers: [AppService],
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
});
