const { Schema, model } = require("mongoose");

const contractSchema = new Schema(
  {
    number: { type: Number, required: true },
    contractor: { type: String, required: true },
    startdate: { type: Date, required: true },
    finaldate: { type: Date, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true},
    address: { type: String, required: true },
    city: { type: String, required: true }
  }
);

model.exports = model('Contract', contractSchema);

/*
CONTRATO
*Numero de contrato
*Nombre de contratista
*Fecha inicio de contrato
*Fecha vencimiento de contrato
*Nombre persona responsable
*Correo de persona responsable
*Telefono de persona responsable
*Dirección de bodega
*Ciudad de bodega
*/
