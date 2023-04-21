import { Module } from '@nestjs/common';
import { KeyLibModule } from 'libs/keys/src';
import { KeyController } from './key.controller';

@Module({
  imports: [KeyLibModule],
  controllers: [KeyController]
})
export class keyModule {}