//----dependencias------ 
'use strict'
const express = require('express');
const auth = require('../middlewares/auth');

//---- REPORTES -----
const reporte_cita = require('./reporte_cita');
const reporte_cliente = require('./reporte_cliente');
const reporte_comentario = require('./reporte_comentario');
const reporte_promocion = require('./reporte_promocion');
const reporte_reclamo = require('./reporte_reclamo');
const reporte_servicio = require('./reporte_servicio');
const reporte_servicio_calificado = require('./reporte_servicio_calificado');
const reporte_servicio_realizado = require('./reporte_servicio_realizado');
const reporte_servicios_solicitados = require('./reporte_servicios_solicitados');
const reporte_solicitud = require('./reporte_solicitud');

//---- GESTIONES ------
const gestion_calificacion = require('./gestion_calificacion');
const gestion_cita = require('./gestion_cita');
const gestion_consejo = require('./gestion_consejo');
const gestion_detalle_servicio = require('./gestion_detalle_servicio');
const gestion_orden = require('./gestion_orden');
const gestion_promocion = require('./gestion_promocion');
const gestion_servicio = require('./gestion_servicio');
const gestion_solicitud = require('./gestion_solicitud');
const gestion_tipo_parametro = require('./gestion_tipo_parametro');

//---- Vistas ------
const vista_agendas = require('./vista_agendas');
const vista_calificacion_orden = require('./vista_calificacion_orden');
const vista_cliente_comentario = require('./vista_cliente_comentario');
const vista_cliente_consejo = require('./vista_cliente_consejo');
const vista_cliente_orden = require('./vista_cliente_orden');
const vista_cliente_perfil = require('./vista_cliente_perfil');
const vista_cliente_promocion = require('./vista_cliente_promocion');
const vista_cliente_reclamo = require('./vista_cliente_reclamo');
const vista_cliente_servicio = require('./vista_cliente_servicio');
const vista_cliente_solicitud = require('./vista_cliente_solicitud');
const vista_comentario = require('./vista_comentario');
const vista_detalle_consejo = require('./vista_detalle_consejo');
const vista_detalle_promocion = require('./vista_detalle_promocion');
const vista_detalle_proveedor = require('./vista_detalle_proveedor');
const vista_detalle_servicios_true = require('./vista_detalle_servicios_true');
const vista_empleado_asignado = require('./vista_empleado_asignado');
const vista_empleado_horarios = require('./vista_empleado_horarios');
const vista_empleados_categoria = require('./vista_empleados_categoria');
const vista_especialidad = require('./vista_especialidad');
const vista_horario_empleado = require('./vista_horario_empleado');
const vista_incidencia_de_orden = require('./vista_incidencia_de_orden');
const vista_insumo_asociados = require('./vista_insumo_asociados');
const vista_insumos = require('./vista_insumos');
const vista_notificacion = require('./vista_notificacion');
const vista_orden = require('./vista_orden');
const vista_orden_cita = require('./vista_orden_cita');
const vista_perfil = require('./vista_perfil');
const vista_presupuesto = require('./vista_presupuesto');
const vista_reclamo = require('./vista_reclamo');
const vista_respuesta_comentario = require('./vista_respuesta_comentario');
const vista_respuesta_presupuesto = require('./vista_respuesta_presupuesto');
const vista_respuesta_solicitud = require('./vista_respuesta_solicitud');
const vista_roles = require('./vista_roles');
const vista_servicio_categoria = require('./vista_servicio_categoria');
const vista_servicio_con_incidencia = require('./vista_servicio_con_incidencia');
const vista_servicio_parametro = require('./vista_servicio_parametro');
const vista_servicio_solicitado = require('./vista_servicio_solicitado');
const vista_servicio_solicitud =require('./vista_servicio_solicitud');
const vista_servicios_calificados = require('./vista_servicios_calificados');
const vista_servicios_con_garantia = require('./vista_servicios_con_garantia');
const vista_solicitud = require('./vista_solicitud');
const vista_solicitud_insumo = require('./vista_solicitud_insumo');
const vista_solicitud_presupuesto = require('./vista_solicitud_presupuesto');
const vista_todas_promociones = require('./vista_todas_promociones');
const vista_todos_consejos = require('./vista_todos_consejos');
const vista_todos_servicio_garantia = require('./vista_todos_servicio_garantia');
const vista_todos_servicios = require('./vista_todos_servicios');
const vista_usuario_notificaciones = require('./vista_usuario_notificaciones');

//----TABLAS BASICAS------
const agenda = require('./agenda');
const auditoria = require('./auditoria');
const bloque = require('./bloque');
const calificacion_orden = require('./calificacion_orden');
const calificacion_servicio = require('./calificacion_servicio');
const categoria_parametro = require('./categoria_parametro');
const categoria_servicio = require('./categoria_servicio');
const cita = require('./cita');
const ciudad = require('./ciudad');
const cliente = require('./cliente');
const comentario = require('./comentario');
const consejo = require('./consejo');
const contacto_negocio = require('./contacto_negocio');
const criterio = require('./criterio');
const descripcion_negocio = require('./descripcion_negocio');
const detalle_consejo = require('./detalle_consejo');
const detalle_promocion = require('./detalle_promocion');
const detalle_proveedor = require('./detalle_proveedor');
const detalle_servicio = require('./detalle_servicio');
const dia_laborable = require('./dia_laborable');
const empleado = require('./empleado');
const empleado_asignado = require('./empleado_asignado');
const especialidad = require('./especialidad');
const estado = require('./estado');
const funcion = require('./funcion');
const garantia = require('./garantia');
const horario = require('./horario');
const horario_empleado = require('./horario_empleado');
const imagen = require('./imagen');
const incidencia_orden = require('./incidencia_orden');
const incidencia_servicio = require('./incidencia_servicio');
const insumo = require('./insumo');
const insumo_asociado = require('./insumo_asociado');
const insumo_usado = require('./insumo_usado');
const negocio = require('./negocio');
const notificacion = require('./notificacion');
const objetivo = require('./objetivo');
const orden_servicio = require('./orden_servicio');
const parametro = require('./parametro');
const perfil = require('./perfil');
const presupuesto = require('./presupuesto');
const promocion = require('./promocion');
const proveedor = require('./proveedor');
const razon_incidencia = require('./razon_incidencia');
const reclamo = require('./reclamo');
const red_social = require('./red_social');
const respuesta_comentario = require('./respuesta_comentario');
const respuesta_presupuesto = require('./respuesta_presupuesto');
const respuesta_reclamo = require('./respuesta_reclamo');
const respuesta_solicitud = require('./respuesta_solicitud');
const respuesta_solicitud_foraneo = require('./respuesta_solicitud_foraneo');
const rol = require('./rol');
const rol_funcion = require('./rol_funcion');
const servicio = require('./servicio');
const servicio_parametro = require('./servicio_parametro');
const servicio_solicitado = require('./servicio_solicitado');
const sistema = require('./sistema');
const solicitud = require('./solicitud');
const solicitud_presupuesto = require('./solicitud_presupuesto');
const suscripcion = require('./suscripcion');
const tipo_comentario = require('./tipo_comentario');
const tipo_incidencia = require('./tipo_incidencia');
const tipo_insumo = require('./tipo_insumo');
const tipo_notificacion = require('./tipo_notificacion');
const tipo_parametro = require('./tipo_parametro');
const tipo_reclamo = require('./tipo_reclamo');
const tipo_respuesta_comentario = require('./tipo_respuesta_comentario');
const tipo_respuesta_presupuesto = require('./tipo_respuesta_presupuesto');
const tipo_respuesta_reclamo = require('./tipo_respuesta_reclamo');
const tipo_respuesta_solicitud = require('./tipo_respuesta_solicitud');
const tipo_servicio = require('./tipo_servicio');
const titulo_seccion = require('./titulo_seccion');
const unidad = require('./unidad');
const usuario = require('./usuario');
const usuario_cliente = require('./usuario_cliente');
const valor_parametro = require('./valor_parametro');


//----app------
const app = express();

//---- Rutas Publicas ------
app.use('/',
	suscripcion,
	//---- Tablas Basicas ----
	usuario,
	cliente,
	negocio,
	parametro,
	perfil,
	tipo_parametro,
	categoria_servicio,
	servicio,
	consejo,
	empleado,
	red_social,
	imagen,
	titulo_seccion,
	promocion,
	calificacion_orden,
	calificacion_servicio,
	tipo_servicio,
	rol,
	funcion,
	rol_funcion,
	objetivo,
	contacto_negocio,
	descripcion_negocio,
	agenda,
	auditoria,
	bloque,
	categoria_parametro,
	ciudad,
	comentario,
	criterio,
	valor_parametro,
	especialidad,
	sistema,
	estado,
	detalle_consejo,
	detalle_promocion,
	detalle_proveedor,
	detalle_servicio,
	dia_laborable,
	empleado_asignado,
	solicitud,
	orden_servicio,
	servicio_solicitado,
	garantia,
	respuesta_solicitud,
	reclamo,
	tipo_reclamo,
	respuesta_comentario,
	respuesta_reclamo,
	horario,
	horario_empleado,
	incidencia_orden,
	incidencia_servicio,
	insumo,
	insumo_asociado,
	insumo_usado,
	notificacion,
	presupuesto,
	proveedor,
	razon_incidencia,
	respuesta_presupuesto,
	servicio_parametro,
	tipo_comentario,
	tipo_incidencia,
	tipo_insumo,
	tipo_notificacion,
	tipo_respuesta_comentario,
	tipo_respuesta_presupuesto,
	tipo_respuesta_reclamo,
	tipo_respuesta_solicitud,
	unidad,
	cita,
	usuario_cliente,
	solicitud_presupuesto,
	respuesta_solicitud_foraneo,
	//---- Gestiones ----
	gestion_solicitud,
	gestion_tipo_parametro,
	gestion_promocion,
	gestion_servicio,
	gestion_consejo,
	gestion_calificacion,
	gestion_detalle_servicio,
	gestion_orden,
	gestion_cita,
	//---- Vistas ----
	vista_comentario,
	vista_solicitud,
	vista_servicio_solicitado,
	vista_reclamo,
	vista_respuesta_presupuesto,
	vista_respuesta_solicitud,
	vista_servicio_categoria,
	vista_empleados_categoria,
	vista_especialidad,
	vista_cliente_consejo,
	vista_cliente_servicio,
	vista_cliente_promocion,
	vista_detalle_servicios_true,
	vista_perfil,
	vista_presupuesto,
	vista_orden,
	vista_cliente_comentario,
	vista_cliente_perfil,
	vista_cliente_reclamo,
	vista_cliente_solicitud,
	vista_cliente_orden,
	vista_agendas,
	vista_detalle_consejo,
	vista_detalle_promocion,
	vista_servicio_parametro,
	vista_todas_promociones,
	vista_todos_consejos,
	vista_todos_servicios,
	vista_calificacion_orden,
	vista_detalle_proveedor,
	vista_incidencia_de_orden,
	vista_insumo_asociados,
	vista_insumos,
	vista_roles,
	vista_servicio_con_incidencia,
	vista_servicios_calificados,
	vista_servicios_con_garantia,
	vista_todos_servicio_garantia,
	vista_servicio_solicitud,
	vista_solicitud_insumo,
	vista_orden_cita,
	vista_horario_empleado,
	vista_empleado_horarios,
	vista_empleado_asignado,
	vista_notificacion,
	vista_usuario_notificaciones,
	vista_respuesta_comentario,
	vista_solicitud_presupuesto,
	//--- Reportes ---
	reporte_comentario,
	reporte_servicio,
	reporte_solicitud,
	reporte_servicios_solicitados,
	reporte_servicio_realizado,
	reporte_reclamo,
	reporte_cita,
	reporte_servicio_calificado,
	reporte_promocion,
	reporte_cliente,
);

//---- Rutas Privadas ------
// app.use('/',auth,

// );

//----Exportar Rutas------ 
module.exports = app