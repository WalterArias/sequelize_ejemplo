const {Sequelize, DataTypes} = require('sequelize')

const sequelize = require('../db')

const Empleado= sequelize.define('empleado',{
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    apellidos:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fechaNace:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    nivel:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
})

module.exports = Empleado