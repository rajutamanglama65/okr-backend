import { Module } from '@nestjs/common';
import { ObjectiveController } from './objective.controller';
import { ObjectiveLibModule } from 'okr/objective';

@Module({
  imports: [ObjectiveLibModule],
  controllers: [ObjectiveController]
})
export class ObjectiveModule {}
