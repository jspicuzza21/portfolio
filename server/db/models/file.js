const { UUID, UUIDV4, BLOB, STRING } = require('sequelize');
const db = require('./db');

const Upload = db.define('upload',{
  id:{
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey:true
  },
  data:{
    type:BLOB
  },
  name:{
    type:STRING
  }
})

module.exports=Upload;