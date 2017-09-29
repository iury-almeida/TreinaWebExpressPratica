module.exports = (app)=>{
    let controller = app.controllers.home;
    app.get('/', controller.primeiro);
    app.get('/alunos', controller.listaAlunos);
    app.post('/teste', controller.testePost);
};