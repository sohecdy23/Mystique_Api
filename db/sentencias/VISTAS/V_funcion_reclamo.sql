﻿CREATE VIEW v_funcion_reclamo AS
SELECT b.id,
       a.id_funcion,
       a.id_rol
       FROM  usuario b
       JOIN  rol_funcion a ON a.id_rol = b.id_rol
       WHERE a.id = 23 AND b.estatus = 'A'::bpchar