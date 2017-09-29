let app = require('./config/express')();

app.listen(app.get('port'), (req, res) => {
    console.log(`Servidor escutando na porta ${app.get('port')} `);
});