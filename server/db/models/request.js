const { UUID, UUIDV4, STRING } = require('sequelize');
const db = require('./db');

const Request = db.define('request',{
  id:{
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey:true
  },
  status:{
    type: STRING,
    defaultValue: 'Incomplete'
  },
  caseNumber:{
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  suspect:{
    type: STRING,
    defaultValue:'Unknown'
  },
  aP:{
    type: STRING,
  },
  crime:{
    type: STRING,
  },
  urgency:{
    type: STRING,
  },
  service:{
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
})

module.exports=Request;