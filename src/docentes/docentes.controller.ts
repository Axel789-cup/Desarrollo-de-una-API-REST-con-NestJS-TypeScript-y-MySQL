
import { Controller, Get, Post, Body } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Controller('docentes')
export class DocentesController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  async obtenerDocentes() {
    const [rows] = await this.databaseService
      .getConnection()
      .query('SELECT * FROM docentes');

    return rows;
  }

  @Post()
  async crearDocente(
    @Body() docente: {
      nombre: string;
      apellido: string;
      correo: string;
    },
  ) {
    const [result]: any = await this.databaseService
      .getConnection()
      .execute(
        'INSERT INTO docentes (nombre, apellido, correo) VALUES (?, ?, ?)',
        [docente.nombre, docente.apellido, docente.correo],
      );

    return {
      mensaje: 'Docente creado correctamente',
      id: result.insertId,
    };
  }
}
