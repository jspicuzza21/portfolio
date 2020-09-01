const { models: { Session, User } } = require('../db/models/index');

const adminApiSecurityCheck = (req) => {
  if (!req.user || req.user.role !== 'admin') {
    throw new Error('unauthorized')
  }
}

const memberApiSecurityCheck = (req) => {
  if (!req.user || req.user.role ==='guest') {
    throw new Error('unauthorized')
  }
}

const accessDeniedResponse = (err, res) => {
  if (err.message === 'unauthorized') {
    res.sendStatus(401)
  } else {
    res.sendStatus(500)
  }
}

const noDirectAccess = (req, res, next) => {
  if (!req.headers.referer) {
    res.redirect('http://www.google.com');
  } else {
    next();
  }
}

module.exports = {
  adminApiSecurityCheck,
  accessDeniedResponse,
  noDirectAccess,
  memberApiSecurityCheck
 };