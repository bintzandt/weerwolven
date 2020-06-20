import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('not existing game returns 400 (GET)', done => {
    return request(app.getHttpServer())
      .get('/game/notexists')
      .expect(400)
      .end(done);
  });

  afterAll(async () => {
    await app.close();
  });
});
