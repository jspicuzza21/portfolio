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
      id: req.user.id,
      department: req.user.department,
      cellphone: req.user.cellphone,
      workPhone: req.user.workPhone,
      name: req.user.name,
      loggedIn: true,
    });
  } else {
    res.send({
      email: null,
      role: 'guest',
      loggedIn: false,
      id:''
    });
  }
});

userRouter.post("/create", async (req, res) => {
  try {
    const { email, name, password, department, role, workPhone, cellphone } = req.body;
    const createdUser = await User.create({ email, name, password, department, workPhone, cellphone, role });
    res.status(201).send(createdUser)
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
})

userRouter.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (err) {
  }
});

userRouter.post('/users/verify/:id', async (req, res)=>{
  const password = req.body.oldPassword;
  const {id} =req.params;
  const user = await User.findOne({
    where: {
      id
    }
  })
  if(!user){
    res.sendStatus(401);
  } else {
    const match = await bcrypt.compare(password, user.password);
    if (match){
      res.status(200).send(true);
    } else {
      res.send(false);
    }
  }
})

userRouter.put('/users/pw/:id', async (req, res)=>{
  let password2 = req.body.newPassword
  const {id} =req.params;
  const user = await User.findOne({where: {id}})
  const hash = await bcrypt.hash(password2, 10);
  await user.update({password:hash}, {where:{id}});
  res.sendStatus(200)
})

module.exports={
  path: '/api',
  router: userRouter
}