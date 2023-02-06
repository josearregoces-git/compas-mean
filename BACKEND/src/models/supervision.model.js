const { Schema, model } = require("mongoose");

const supervisionSchema = new Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    code: { type: String, required: true },
    serial: { type: String, required: true},
    network: { type: String, required: true},
    location: { type: String, required: true},
    department: { type: String, required: true},
    toner: { type: Number, required: true},
    drum: { type: Number, required: true },
    fuser: { type: Number, required: true },
    counter: { type: Number, required: true},
    description: { type: String, required:true}
  }
);

model.exports = model('Supervision', supervisionSchema);

/*
PRINT SUPERVISION
*Marca de impresora
*Modelo
*Placa
*Serial
*Direccion IP
*Dependencia
*Sede
*Toner
*Tambor
*Fusora
*Contador
*Descripcion
*/