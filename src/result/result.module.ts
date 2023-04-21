import { Module } from '@nestjs/common';
import { ResultLibModule } from 'libs/result/src';
import { ResultController } from './result.controller';

@Module({
  imports: [ResultLibModule],
  controllers: [ResultController]
})
export class ResultModule {}