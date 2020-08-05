const { UUID, UUIDV4, STRING } = require('sequelize');
const db = require('./db');

const Device = db.define('device',{
  id:{
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey:true
  },
  make: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  model: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  serial: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  pin: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  authority: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  notes: {
    type: STRING,
  },
})

module.exports=Device;