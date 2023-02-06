const { Schema, model } = require("mongoose");

const supplySchema = new Schema(
  {
    name: { type: String, required: true},
    brand: { type: String, required: true },
    model: { type: String, required: true },
    code: { type: String, required: true },
    serial: { type: String, required: true},
    location: { type: String, required: true},
    department: { type: String, required: true},
    typesupply: { type: String, required: true},
    priority: { type: String, required: true},
    requestDate: { type: Date, required: true },
    deliveryDate: { type: Date, required: true },
    description: { type: String, required: true}
  }
);

model.exports = model('Supply', supplySchema);

/*
ENTREGA DE INSUMO
*Nombre funcionario
*Marca de impresora
*Modelo
*Placa
*Serial
*Dependencia
*Sede
*Tipo de insumo
*Prioridad entrega
*Fecha solicitud
*Fecha entrega
*Descripcion
*/