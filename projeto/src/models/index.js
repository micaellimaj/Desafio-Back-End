console.log('Sequelize:', typeof Sequelize);      // deve mostrar "function"
console.log('DataTypes:', typeof DataTypes);      // deve mostrar "object"
console.log('sequelize:', typeof sequelize);      // deve mostrar "object"

// Verifique também os modelos carregados
console.log('\nModelos carregados:');
Object.keys(db).forEach(modelName => {
    console.log(`${modelName}:`, db[modelName]);
});


// src/models/index.js
const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database'); // ajuste conforme sua estrutura

const db = {};

// Debug dos modelos
console.log('\nCarregando modelos...');
fs.readdirSync(__dirname)
    .filter(file => {
        return file.indexOf('.') !== 0 && file !== 'index.js';
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, DataTypes);
        db[model.name] = model;
        
        // Debug de cada modelo
        console.log(`Modelo ${model.name} carregado`);
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
        console.log(`Associations definidas para ${modelName}`);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;