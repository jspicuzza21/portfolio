const { Router } = require('express');
const { models:{ User, Session } }= require('../../db/index');

const bcrypt = require('bcrypt');

const userRouter = Router();


userRouter.post('/login', async (req, res)=>{
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

userRouter.get('/whoami', (req, res) => {
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

userRouter.post("/create", async (req, res) => {
  try {
    const { email, name, password, department, role } = req.body;
    const createdUser = await User.create({ email, name, password, department, role });
    res.status(201).send(createdUser)
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
})

module.exports={
  path: '/api',
  router: userRouter
}