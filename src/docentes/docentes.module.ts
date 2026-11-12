
import { Module } from '@nestjs/common';
import { DocentesController } from './docentes.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DocentesController],
})
export class DocentesModule {}
