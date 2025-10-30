#﻿**mision\_02\_validacion**

Tarea 3 individual: El Guardián del Esquema y los Vínculos Arcanos

#**Misión: Bestiario Digital — MongoDB**

**Autor:** Freddy Cristhian Jiménez Dávila

##**Descripción**

Este repositorio contiene la continuación del proyecto Bestiario Digital y tiene como objetivo blindar la base de datos mediante la validación de esquemas (JSON Schema) en MongoDB para evitar le inserción de datos inválidos y mantener correctamente estructurados los que vayan ingresando.

Dentro de esta actividad se muestran reglas de integridad y control para asegurar que los documentos insertados cumplan con una estructura predefinida, la cual es muy flexible y puede ser reestructurada rápidamente, y tipos de datos correctos, así como modelar adecuadamente las relaciones entre las entidades guardianes y criaturas.

##**Archivos incluidos**

- **01\_definicion\_guardianes.mongodb —** Script que define la colección guardianes con un JSON Schema para sus reglas de validación.
- **02\_definicion\_criaturas.mongodb** — Script que define la colección criaturas con un JSON Schema para sus reglas de validación.
- **03\_pruebas\_insercion.mongodb** — Incluye inserciones válidas e inválidas para comprobar las reglas de validación.
- **ANALISIS\_VALIDACION.md** — Documento que tiene la reflexión de: la importancia de validar a nivel de base de datos, la justificación del modelado embebido y referenciado, y el análisis de las decisiones de modelo aplicadas en las relaciones.
- **README.md** — Este archivo.

