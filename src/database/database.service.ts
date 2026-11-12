

import { Injectable, OnModuleDestroy } from '@nestjs/common';
import mysql from 'mysql2/promise';

@Injectable()
export class DatabaseService implements OnModuleDestroy {
  private connection: mysql.Pool;

  constructor() {
    this.connection = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: {
        rejectUnauthorized: true,
      },
      waitForConnections: true,
      connectionLimit: 10,
    });
  }

  async onModuleDestroy() {
    await this.connection.end();
  }

  getConnection() {
    return this.connection;
  }
}
