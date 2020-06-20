import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PlayersModule } from './players/players.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 1234,
      username: 'admin',
      password: 'admin',
      database: 'weerwolven',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    PlayersModule,
    GamesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
