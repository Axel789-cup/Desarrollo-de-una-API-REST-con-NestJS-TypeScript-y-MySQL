
import { Controller, Get, Post, Body } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Controller('asignaturas')
export class AsignaturasController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  async obtenerAsignaturas() {
    const [rows] = await this.databaseService
      .getConnection()
      .query(`
        SELECT asignaturas.id, asignaturas.nombre,
               docentes.nombre AS docente,
               docentes.apellido AS apellido
        FROM asignaturas
        INNER JOIN docentes
        ON asignaturas.docente_id = docentes.id
      `);

    return rows;
  }

  @Post()
  async crearAsignatura(
    @Body() asignatura: {
      nombre: string;
      docente_id: number;
    },
  ) {
    const [result]: any = await this.databaseService
      .getConnection()
      .execute(
        'INSERT INTO asignaturas (nombre, docente_id) VALUES (?, ?)',
        [asignatura.nombre, asignatura.docente_id],
      );

    return {
      mensaje: 'Asignatura creada correctamente',
      id: result.insertId,
    };
  }
}
