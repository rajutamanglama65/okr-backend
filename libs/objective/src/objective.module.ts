import { Module } from '@nestjs/common';
import { ObjectiveService } from './objective.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Objective } from 'libs/models/objective.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Objective])],
  providers: [ObjectiveService],
  exports: [ObjectiveService],
})
export class ObjectiveLibModule {}
