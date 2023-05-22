/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Pedro Henrique Pereira de Melo 2111562 
DATA 17/05/2023 */


const { Item } = require('../models');

class PacienteController {
    constructor() {
      // Inicialize as propriedades da classe, se necessário
    }
  
    async findAll (req, res) {
        try {
            const items = {}; //await Item.findAll();
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const id = req.params.id;
            const item = await Paciente.findByPk(id);

            if (Paciente) {
                res.status(200).json(Paciente);
            } else {
                res.status(404).json({ error: 'Paciente not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
  
    async create(req, res) {
        try {
            const newPaciente = await Paciente.create(req.body);
            res.status(201).json(newPaciente);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const [updatedRows] = await Paciente.update(req.body, {
                where: { id },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'Paciente updated successfully' });
            } else {
                res.status(404).json({ error: 'Paciente not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const deletedRows = await Paciente.destroy({
                where: { id },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'Paciente deleted successfully' });
            } else {
                res.status(404).json({ error: 'Paciente not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
  
  }
  
  module.exports = PacienteController;
  