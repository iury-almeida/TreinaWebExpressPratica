module.exports = (app) => {
    let controller = {
        primeiro: (req, res) => {
            res.send('Olá there');
        },
        listaAlunos: (req, res) => {
            let alunos = [
                { nome: 'Maria' },
                { nome: 'João' },
                { nome: 'Bárbara' }
            ]
            res.render('alunos', { titulo: 'Alunos', alunos });
        },
        testePost: (req, res) => {
            var myJson = req.body;
            res.format({
                text: function () {
                    res.send('Just text');
                },
                json: function () {
                    myJson.reqType = 'JSON';
                    res.json(myJson);
                }
            });
        }
    }
    return controller;
};