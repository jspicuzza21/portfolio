const { Router } = require('express');
const { models:{ User, Session } }= require('../../db/index');
const bcrypt = require('bcrypt');
const apiRouter = Router();


apiRouter.post('/login', async (req, res)=>{
  const { username, password } = req.body;
  const user = await User.findOne({
    where: {
      username
    }
  })
  if(!user){
    res.sendStatus(401);
  } else {
    const match = await bcrypt.compare(password, user.password);
    if (match){
      const usersSession = await Session.findByPk(req.session_id)
      await usersSession.setUser(user)
      res.sendStatus(200);
    }
  }
})

apiRouter.get('/whoami', (req, res) => {
  if (req.user) {
    res.send({
      username: req.user.username,
      loggedIn: true,
    });
  } else {
    res.send({
      username: null,
      loggedIn: false,
    });
  }
});

module.exports={
  path: '/api',
  router: apiRouter
}