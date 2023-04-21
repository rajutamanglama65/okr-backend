import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Result } from 'libs/models/result.entity';
import { ResultService } from './result.service';

@Module({
  imports: [TypeOrmModule.forFeature([Result])],
  providers: [ResultService],
  exports: [ResultService],
})
export class ResultLibModule {}