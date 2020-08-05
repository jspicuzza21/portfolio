const { UUID, UUIDV4, BOOLEAN, STRING } = require('sequelize');
const db = require('./db');

const Request = db.define('request',{
  id:{
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey:true
  },
  completed:{
    type: BOOLEAN,
    defaultValue: false
  },
  caseNumber:{
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  crime:{
    type: STRING,
  },
  urgency:{
    type: STRING,
  },
})

module.exports=Request;