const { Router, request } = require('express');
const { models:{ User, Request, Device } }= require('../../db/index');

const requestRouter = Router();

requestRouter.post('/request', async (req, res) => {
  try {
    const { caseNumber, crime, urgency, userId, suspect, aP, service } = req.body;
    const createdReq = await Request.create({ caseNumber, crime, urgency, userId, service, aP, suspect });
    res.status(201).send(createdReq)
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
})

requestRouter.get('/request', async (req, res)=>{
  const requests = Request.findAll();
  res.send(requests);
})

requestRouter.get('/devices', async (req, res)=>{
  const devices = Device.findAll();
  res.send(devices);
})

requestRouter.get('/request/:id', async(req, res) =>{
  const { id } = req.params;
  const userReqs = await Request.findAll({where: {userId:id}})
  res.send(userReqs)
})

requestRouter.get('/devices/:id', async(req, res) =>{
  const { id } = req.params;
  const reqDevs = await Device.findAll({where: {requestId:id}})
  res.send(reqDevs)
})

requestRouter.post('/devices', async (req, res) => {
  try {
    const { make, model, serial, pin, authority, notes , requestId, devType, evidenceNum} = req.body;
    const createdDevice = await Device.create({ make, model, serial, pin, authority, notes, requestId, devType, evidenceNum });
    res.status(201).send(createdDevice)
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
})

requestRouter.put('/request/:id', async (req, res)=>{
  try{
    const { id } = req.params;
    const { caseNumber, crime, urgency, suspect, aP, service } = req.body;
    await Request.update({caseNumber, crime, urgency, suspect, aP, service}, {where:{id}})
    const requests=Request.findAll();
    res.send(requests);
  }
  catch(e){ 
    console.log('failed to update request')
    console.log(e)
  }
})

requestRouter.put('/request/status/:id', async (req, res)=>{
  try{
    const { id } = req.params;
    const request = await Request.findOne({where: {id}})
    request.status='Submitted';
    const { status } = request
    await Request.update({status}, {where:{id}});
    const requests = await Request.findAll();
    res.send(requests);
  }
  catch(e){ 
    console.log('failed to update request')
    console.log(e)
  }
})

requestRouter.put('/devices/:id', async (req, res)=>{
  try{
    const { id } = req.params;
    const { make, model, serial, pin, authority, notes , requestId, devType, evidenceNum} = req.body;
    await Device.update({make, model, serial, pin, authority, notes , requestId, devType, evidenceNum}, {where:id})
    const devices=Device.findAll();
    res.send(devices);
  }
  catch(e){ 
    console.log('failed to update device')
    console.log(e)
  }
})

requestRouter.delete('/devices/:id', async (req, res)=>{
  try{
    const deletedDevice = await Device.findByPk(req.params.id);
    const { requestId } = deletedDevice 
    await deletedDevice.destroy();
    const devices = await Device.findAll({where: {requestId}});
    res.send(devices);
  }
  catch(e){
    console.log(e)
  }
})

requestRouter.delete('/request/:id', async (req, res)=>{
  try{
    const deletedReq = await Request.findByPk(req.params.id);
    await deletedReq.destroy();
    await Device.destroy({ where: { requestId: null } })
    const requests = await Request.findAll();
    const devices = await Device.findAll();
    res.send({requests, devices});
  }
  catch(e){
    console.log(e)
  }
})

module.exports={
  path: '/req',
  router: requestRouter
}