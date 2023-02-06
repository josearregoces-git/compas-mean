const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema(
  {
    name: { type: String, required: true },
    dni: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    position: { type: String, required: true },
    domain: { type: String, required: true },
    spoa: { type: String, required: true},
    status: { type: String, required: true }
  }
);

module.exports =  mongoose.model('Employee', employeeSchema);

/*
FUNCIONARIO
*Nombre de funcionario
*Numero de cedula
*Correo corporativo
*Telefono personal
*Cargo asignado
*Usuario dominio
*Usuario spoa
*Estado del funcionario
*/
