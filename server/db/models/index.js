const db = require('./db');
const User = require('./user');
const Session = require('./session');
const Device = require('./device');
const Request = require('./request');

User.hasMany(Session);
Session.belongsTo(User);

User.hasMany(Request);
Request.belongsTo(User);

Request.hasMany(Device);
Device.belongsTo(Request);

module.exports={
  db,
  models: {
    User,
    Session,
    Device,
    Request,
  }
};