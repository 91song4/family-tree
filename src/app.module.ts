import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { FamilyNameModule } from './family-name/family-name.module';
import { OriginClanModule } from './origin-clan/origin-clan.module';
import { FamilyMemberModule } from './family-member/family-member.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './config/typeOrm.config.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
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
