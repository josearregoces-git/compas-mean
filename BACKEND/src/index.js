const { mongoose } = require('./data');
const app = require('./app');

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
    console.log('Press Ctrl+C to quit.');
});