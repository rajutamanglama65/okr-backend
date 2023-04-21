import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Key } from 'libs/models/key.entity';
import { KeyService } from './key.service';

@Module({
  imports: [TypeOrmModule.forFeature([Key])],
  providers: [KeyService],
  exports: [KeyService],
})
export class KeyLibModule {}