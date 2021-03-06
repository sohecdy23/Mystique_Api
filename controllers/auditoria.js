//----dependencias------  
'use strict'
const bcrypt = require("bcryptjs");
const Auditoria = require('../models/auditoria');

exports.findDocuments = (req,res) => {

  //parametro fechas
  if(req.query.fecha_inicio){
    var fecha_inicio = req.query.fecha_inicio;
  }else{
    var fecha_inicio = '01/01/0001';
  }

  if(req.query.fecha_fin){
    var fecha_fin = req.query.fecha_fin;
  }else{
    var fecha_fin = '31/12/9999';
  }
  
  Auditoria.forge().query(function(qb) { qb.whereBetween('fecha_creacion', [fecha_inicio, fecha_fin+' 23:59']);}).fetchAll()
  .then(function(data){
    res.status(200).json({ error : false, data : data.toJSON() });
  })
  .catch(function (err) {
    res.status(500).json({ error: true, data: {message: err.message} });
  });

}

exports.createDocument = (req,res) => {

  let newData = {
    nombre_tabla:      req.body.nombre_tabla,
    usuario:           req.body.usuario,
    operacion:         req.body.operacion,
    registro:          req.body.registro,
    valor_viejo:       req.body.valor_viejo,
    valor_nuevo:       req.body.valor_nuevo,
    fecha_creacion:    req.body.fecha_creacion,
    estatus:           req.body.estatus,
  }

  Auditoria.forge(newData).save()
  .then(function(data){
    res.status(200).json({ error: false, data: { message: 'auditoria creado' } });
  })
  .catch(function (err) {
    res.status(500).json({ error: true, data: {message: err.message} });
  });

}

exports.findOneDocument = (req,res) => {

  let conditions = { id: req.params.id };

  Auditoria.forge(conditions).fetch()
    .then(function(data){
      if(!data) return res.status(404).json({ error : true, data : { message : 'auditoria no existe' } });

      res.status(200).json({ error : false, data : data.toJSON() })

    })
    .catch(function(err){
      res.status(500).json({ error : false, data : {message : err.message} })
    })

}

exports.updateDocument = (req,res) => {

  let conditions = { id: req.params.id };

  Auditoria.forge(conditions).fetch()
    .then(function(auditoria){
      if(!auditoria) return res.status(404).json({ error : true, data : { message : 'auditoria no existe' } });

      let updateData = {
        nombre_tabla:      req.body.nombre_tabla,
        usuario:           req.body.usuario,
        operacion:         req.body.operacion,
        registro:          req.body.registro,
        valor_viejo:       req.body.valor_viejo,
        valor_nuevo:       req.body.valor_nuevo,
        fecha_creacion:    req.body.fecha_creacion,
        estatus:           req.body.estatus,
      }
      
      auditoria.save(updateData)
        .then(function(data){
          res.status(200).json({ error : false, data : { message : 'auditoria actualizado'} });
        })
        .catch(function(err){
          res.status(500).json({ error : false, data : {message : err.message} });
        })

    })
    .catch(function(err){
          res.status(500).json({ error : false, data : {message : err.message} })
    })

}

exports.deleteDocument = (req,res) => {

  let conditions = { id: req.params.id };

  Auditoria.forge(conditions).fetch()
    .then(function(auditoria){
      if(!auditoria) return res.status(404).json({ error : true, data : { message : 'auditoria no existe' } });

      auditoria.destroy()
        .then(function(data){
          res.status(200).json({ error : false, data : {message : 'auditoria eliminado'} })
        })
        .catch(function(err){
          res.status(500).json({error : true, data : {message : err.message}});
        })

    })
    .catch(function(err){
          res.status(500).json({ error : false, data : {message : err.message} })
    })

}