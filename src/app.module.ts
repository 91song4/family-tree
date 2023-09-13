import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { FamilyNameModule } from './family-name/family-name.module';
import { OriginClanModule } from './origin-clan/origin-clan.module';
import { FamilyMemberModule } from './family-member/family-member.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123123',
      database: 'family_tree',
      synchronize: true,
      logging: false,
      entities: [__dirname + '/../**/*.entity{.js, .ts}'],
      namingStrategy: new SnakeNamingStrategy(),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'public'),
      serveRoot: '/index',
      exclude: ['/api/(.*)'],
    }),
    FamilyNameModule,
    OriginClanModule,
    FamilyMemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
