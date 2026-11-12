
import { Module } from '@nestjs/common';
import { AsignaturasController } from './asignaturas.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AsignaturasController],
})
export class AsignaturasModule {}
