const { Schema, model } = require("mongoose");

const computerSchema = new Schema(
  {
    type: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    serial: { type: String, required: true },
    code: { type: String, required: true },
    host: { type: String, required: true },
    network: { type: String, required: true},
    cpu: { type: String, required: true},
    ram: { type: String, required: true},
    hdd: { type: String, required: true},
    os: { type: String, required: true},
    office: { type: String, required: true},
    name: { type: String, required: true},
    department: { type: String, required: true},
    date: { type: Date, required: true},
    contract: { type: String, required: true },
    status: { type: String, required: true },
    description: { type: String, required: true}
  }
);

model.exports = model('Computer', computerSchema);

/*
IMPRESORAS
*Tipo de computador
*Marca
*Modelo
*Serial
*Placa
*Nombre host
*Direccion IP
*Procesador
*Memoria RAM
*Disco Duro
*Sistema operativo
*Ofimatica
*Nombre funcionario (employee class)
*Dependencia (departament class)
*Fecha instalacion
*Numero contrato (contract class)
*Estado del activo
*Descripcion
*/