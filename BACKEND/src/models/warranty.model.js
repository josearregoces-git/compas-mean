const { Schema, model } = require("mongoose");

const warrantySchema = new Schema(
  {
    ticket: { type: String, required: true },
    name: { type: String, required: true},
    type: { type: String, required: true},
    brand: { type: String, required: true },
    model: { type: String, required: true },
    serial: { type: String, required: true},
    vendor: { type: String, required: true},
    ticketVendor: { type: String, required: true},
    technician: { type: String, required: true},
    maintenance: { type: String, required: true},
    spare: { type: String, required: true},
    requestDate: { type: Date, required: true },
    deliveryDate: { type: Date, required: true },
    description: { type: String, required: true},
    certificate: { type: String, required: true}
  }
);

model.exports = model('Warranty', warrantySchema);

/*
GARANTIA EQUIPOS DE COMPUTO E IMPRESORAS
*Numero de ticket
*Nombre funcionario (class employees)
*Tipo de consulta (computadores, impresoras o telefono voip)
*Marca
*Modelo
*Serial (class computers, class printers, class devices)
*Proveedor
*Ticket del proveedor
*Nombre del tecnico
*Parte reemplazada
*Fecha solicitud
*Fecha entrega
*Descripcion
*/