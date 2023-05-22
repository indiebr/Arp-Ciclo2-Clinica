/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Pedro Henrique Pereira de Melo 
DATA 17/05/2023 */


index.js
Import Express

const express = require('express');
const PacienteController = require('./app/controllers/PacienteController');
const PacienteController = new PacienteController();
const app = express();


app.use(express.json());

app.get('/', function(req, res) {
  res.send('Bem-vindo!');
});

app.get('/paciente', (req, res) => PacienteController.findAll(req, res));
app.post('/paciente', (req, res) => PacienteController.create(req, res));
app.get('/paciente/:id', (req, res) => PacienteController.findById(req, res));
app.put('/paciente/:id', (req, res) => PacienteController.update(req, res));
app.delete('/paciente/:id', (req, res) => PacienteController.delete(req, res));

//Começa o webserver
app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});

