const mysql = require('mysql2');

const Promise = require('bluebird');
const database = 'greenfield';
var Sequelize = require('sequelize');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: database

});


var seq = new Sequelize(database,"root","root",{dialect: 'mysql'});

seq
  .authenticate()
  .then(() => {
    console.log("authenticate successed");
  })
  .catch(() => {
    console.log("authenticate failed");
  });


  var user = seq.define("user", {
    userId: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    usersName: {type : Sequelize.STRING  },
    Email : {type : Sequelize.STRING},
    balance : {type :Sequelize.INTEGER},
    salt : {type : Sequelize.STRING},
    password : {type : Sequelize.STRING}
  });
     
  user.sync({alter : true}).then(data=>{
    console.log(data);
  }).catch(err => { console.log(err)})



module.exports = connection;
