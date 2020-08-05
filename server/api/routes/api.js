const { Router } = require('express');
const { models:{ User, Session } }= require('../../db/index');
const bcrypt = require('bcrypt');
const apiRouter = Router();


apiRouter.post('/login', async (req, res)=>{
  const { email, password } = req.body;
  const user = await User.findOne({
    where: {
      email
    }
  })
  if(!user){
    res.sendStatus(401);
  } else {
    const match = await bcrypt.compare(password, user.password);
    if (match){
      const usersSession = await Session.findByPk(req.session_id)
      await usersSession.setUser(user)
      res.status(200).send(user);
    } else {
      res.sendStatus(401)
    }
  }
})

apiRouter.get('/whoami', (req, res) => {
  if (req.user) {
    res.send({
      email: req.user.email,
      role: req.user.role,
      loggedIn: true,
    });
  } else {
    res.send({
      email: null,
      role: 'guest',
      loggedIn: false,
    });
  }
});

module.exports={
  path: '/api',
  router: apiRouter
}