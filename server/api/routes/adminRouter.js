const { Router, request } = require('express');
const { models:{ User, Request, Device } }= require('../../db/index');
const { adminApiSecurityCheck, accessDeniedResponse} = require('../../utils/security');

const adminRouter = Router();

adminRouter.get('/request', async (req, res)=>{
  try {
    adminApiSecurityCheck(req);
    const requests = await Request.findAll({include:[Device, User],})
    res.send(requests);
  }
  catch (err) {
    console.log(err)
    accessDeniedResponse(err, res);
  }
})

adminRouter.get('/devices', async (req, res)=>{
  try {
    adminApiSecurityCheck(req);
  const requests = await Device.findAll()
  res.send(requests);
  }
  catch (err) {
    console.log(err)
    accessDeniedResponse(err, res);
  }
})

adminRouter.get('/users', async (req, res)=>{
  try {
    adminApiSecurityCheck(req);
  const users = await User.findAll()
  res.send(users);
  }
  catch (err) {
    console.log(err)
    accessDeniedResponse(err, res);
  }
})

adminRouter.get('/devices/filter/:filter', async (req, res)=>{
  try {
    adminApiSecurityCheck(req);
  const devices = await Device.findAll();
  const prop=Object.keys(req.query)[0]
  const filter=req.query[prop];
  const filteredResults=devices.filter(dev=> dev[prop]===filter)
  res.send(filteredResults);
  }
  catch (err) {
    console.log(err)
    accessDeniedResponse(err, res);
  }
})

adminRouter.get('/request/filter/:filter', async (req, res)=>{
  try {
    adminApiSecurityCheck(req);
    const requests = await Request.findAll({include:[Device, User]});
    const prop=Object.keys(req.query)[0]
    const filter=req.query[prop];
    const filteredResults=requests.filter(dev=> dev[prop]===filter)
    res.send(filteredResults);
  }catch (err) {
    console.log(err)
    accessDeniedResponse(err, res);
  }
})

adminRouter.get('/request/:id', async (req, res)=>{
  try {
    adminApiSecurityCheck(req);
    const { id } = req.params;
    const request = await Request.findAll({
      where:{
        id
    },
    include:[Device] 
})
  res.send(request);
  }catch (err) {
    console.log(err)
    accessDeniedResponse(err, res);
  }
})

adminRouter.put('/request/status/:id', async (req, res)=>{
  try {
    adminApiSecurityCheck(req);
    const { id } = req.params;
    const {updatedStatus} = req.body;
    const request = await Request.findOne({where: {id}})
    request.status=updatedStatus;
    const {status} = request
    await Request.update({status}, {where: {id}})
    res.send(request)
  }catch (err) {
    console.log(err)
    accessDeniedResponse(err, res);
  }
})

adminRouter.delete('/users/:id', async (req, res)=>{
  try {
    adminApiSecurityCheck(req);
    const { id } = req.params;
    const deleteUser = await User.findOne({where: {id}})
    await deleteUser.destroy();
    const users = await User.findAll();
    res.send(users);
  }catch (err) {
    console.log(err)
    accessDeniedResponse(err, res);
  }
})

adminRouter.post('/users', async (req, res)=>{
  try {
    adminApiSecurityCheck(req);
    const { email, name, password, department, role } = req.body;
    const createdUser = await User.create({ email, name, password, department, role });
    res.status(201).send(createdUser)
  } catch (e) {
    console.log(e);
    accessDeniedResponse(err, res);
  }
})

adminRouter.put('/users/:id', async (req, res)=>{
  try{
    adminApiSecurityCheck(req);
    const { id } = req.params;
    const { email, name, password, department, role } = req.body;
    await User.update({email, name, password, department, role}, {where:{id}});
    const users=User.findAll();
    res.send(users);
  }
  catch(e){
    console.log(e)
    accessDeniedResponse(err, res);
  }
})

adminRouter.delete('/request/:id', async (req, res)=>{
  try{
    adminApiSecurityCheck(req);
    const deletedReq = await Request.findByPk(req.params.id);
    await deletedReq.destroy();
    await Device.destroy({ where: { requestId: null } })
    const requests = await Request.findAll({include:[Device, User],});
    res.send(requests);
  }
  catch(e){
    console.log(e)
    accessDeniedResponse(err, res);
  }
})

module.exports={
  path: '/admin',
  router: adminRouter
}