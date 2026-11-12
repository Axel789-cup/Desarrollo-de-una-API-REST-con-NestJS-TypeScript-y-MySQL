
-- ==========================================
-- PROYECTO: GESTION ACADEMICA
-- BASE DE DATOS: gestion_academica
-- ==========================================

-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS gestion_academica;

-- Seleccionar la base de datos
USE gestion_academica;

-- ==========================================
-- TABLA DOCENTES
-- ==========================================

CREATE TABLE IF NOT EXISTS docentes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL
);

-- ==========================================
-- TABLA ASIGNATURAS
-- ==========================================

CREATE TABLE IF NOT EXISTS asignaturas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    docente_id INT NOT NULL,
    FOREIGN KEY (docente_id) REFERENCES docentes(id)
);

-- ==========================================
-- REGISTROS DE PRUEBA
-- ==========================================

INSERT INTO docentes (nombre, apellido, correo) VALUES
('Carlos', 'Ramirez', 'carlos@gmail.com'),
('Laura', 'Martinez', 'laura@gmail.com'),
('Andres', 'Gomez', 'andres@gmail.com');

INSERT INTO asignaturas (nombre, docente_id) VALUES
('Bases de Datos', 1),
('Programacion', 2),
('Matematicas', 3);

-- ==========================================
-- CONSULTAS DE VERIFICACION
-- ==========================================

SHOW TABLES;

SELECT * FROM docentes;

SELECT * FROM asignaturas;

SELECT
    asignaturas.nombre AS asignatura,
    docentes.nombre AS docente,
    docentes.apellido AS apellido
FROM asignaturas
INNER JOIN docentes
ON asignaturas.docente_id = docentes.id;
