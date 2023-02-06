const { Schema, model } = require("mongoose");

const printerSchema = new Schema(
  {
    name: { type: String, required: true},
    type: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    serial: { type: String, required: true },
    code: { type: String, required: true },
    host: { type: String, required: true },
    network: { type: String, required: true},
    name: { type: String, required: true},
    department: { type: String, required: true},
    date: { type: Date, required: true},
    contract: { type: String, required: true },
    status: { type: String, required: true },
    description: { type: String, required: true}
  }
);

model.exports = model('Printer', printerSchema);

/*
IMPRESORAS
*Tipo de impresora
*Marca
*Modelo
*Serial
*Placa
*Nombre host
*Direccion IP
*Nombre funcionario (employee class)
*Dependencia (departament class)
*Fecha instalacion
*Numero contrato (contract class)
*Estado del activo
*/