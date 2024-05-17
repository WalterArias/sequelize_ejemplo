const {Sequelize} = require('sequelize')

const sequelize =new Sequelize('empresa','root','',{
    host:'localhost',
    dialect:'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('conexion exitosa')
})
.catch(error=>{
    console.log("error en la conexion",error)

})

module.exports = sequelize