const { Schema, model } = require("mongoose");

const departmentSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    floor: { type: String, required: true },
    office: { type: String, required: true}
  }
);

model.exports = model('Department', departmentSchema);

/*
DEPENDENCIAS
*Nombre de dependencia
*Extension
*Sede (location class)
*Piso
*Oficina
*/