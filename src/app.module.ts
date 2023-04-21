import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { UserModule } from './user/user.module';
import { ObjectiveModule } from './objective/objective.module';
import { keyModule } from './keys/key.module';
import { ResultModule } from './result/result.module';


@Module({
  imports: [
    ConfigModule.forRoot({}),
    DatabaseModule,
    UserModule,
    ObjectiveModule,
    keyModule,
    ResultModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
