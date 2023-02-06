const { Schema, model } = require("mongoose");

const locationSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true }
  }
);

model.exports = model('Location', locationSchema);

/*
SEDE
*Nombre de sede
*Codigo
*Telefono
*Direccion
*Ciudad
*/