const mongoose = require('mongoose');
const URI = 'mongodb+srv://admin:admin@stack-mean.do3lapf.mongodb.net/mean-fgn-sistema?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);
mongoose.connect(URI)
 .then((db) => console.log('Connected!!!'))
 .catch((err) => console.error(err));

 module.exports = mongoose;