/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Pedro Henrique Pereira de Melo 
DATA 17/05/2023 */

const sequelize = require('../../database');
const Item = require('./Item');

const models = {
  Item
};

sequelize.sync({ alter: true });

module.exports = models;
