const { Router, request } = require('express');
const { models:{ User, Request, Device } }= require('../../db/index');
const { adminApiSecurityCheck, accessDeniedResponse, memberApiSecurityCheck} = require('../../utils/security');
const Upload = require('../../db/models/file');

const requestRouter = Router();

requestRouter.post('/request', async (req, res) => {
  try {
    memberApiSecurityCheck(req);
    const { caseNumber, crime, urgency, userId, suspect, aP, service } = req.body;
    const createdReq = await Request.create({ caseNumber, crime, urgency, userId, service, aP, suspect });
    res.status(201).send(createdReq)
  } catch (e) {
    accessDeniedResponse(err, res);
    console.log(e);
  }
})

requestRouter.get('/request', async (req, res)=>{
  try {
    memberApiSecurityCheck(req);
    const requests = Request.findAll();
    res.send(requests);
  } catch (e) {
    accessDeniedResponse(err, res);
    console.log(e);
  }
})

requestRouter.get('/devices', async (req, res)=>{
  try {
    memberApiSecurityCheck(req);
    const devices = Device.findAll();
    res.send(devices);
} catch (e) {
    accessDeniedResponse(err, res);
    console.log(e);
}
})

requestRouter.get('/request/:id', async(req, res) =>{
  try {
    memberApiSecurityCheck(req);
    const { id } = req.params;
    const userReqs = await Request.findAll({where: {userId:id}})
    res.send(userReqs)
} catch (e) {
    accessDeniedResponse(err, res);
    console.log(e);
}
})

requestRouter.get('/devices/:id', async(req, res) =>{
  try {
    memberApiSecurityCheck(req);
  const { id } = req.params;
  const reqDevs = await Device.findAll({where: {requestId:id}})
  res.send(reqDevs)
} catch (e) {
  accessDeniedResponse(err, res);
  console.log(e);
}
})

requestRouter.post('/devices', async (req, res) => {
  try {
      memberApiSecurityCheck(req);
      const { make, model, serial, pin, authority, notes , requestId, devType, evidenceNum} = req.body;
      const createdDevice = await Device.create({ make, model, serial, pin, authority, notes, requestId, devType, evidenceNum });
      res.status(201).send(createdDevice)
  } catch (err) {
      accessDeniedResponse(err, res);
      console.log(err);
  }
})

requestRouter.put('/request/:id', async (req, res)=>{
  try{
    memberApiSecurityCheck(req);
    const { id } = req.params;
    const { caseNumber, crime, urgency, suspect, aP, service } = req.body;
    await Request.update({caseNumber, crime, urgency, suspect, aP, service}, {where:{id}})
    const requests=Request.findAll();
    res.send(requests);
  }
  catch(err){ 
    accessDeniedResponse(err, res);
    console.log('failed to update request')
    console.log(err)
  }
})

requestRouter.put('/request/status/:id', async (req, res)=>{
  try{
    memberApiSecurityCheck(req);
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
    accessDeniedResponse(e, res);
  }
})

requestRouter.put('/devices/:id', async (req, res)=>{
  try{
    memberApiSecurityCheck(req);
    const { id } = req.params;
    const { make, model, serial, pin, authority, notes , requestId, devType, evidenceNum} = req.body;
    await Device.update({make, model, serial, pin, authority, notes , requestId, devType, evidenceNum}, {where:id})
    const devices=Device.findAll();
    res.send(devices);
  }
  catch(e){ 
    console.log('failed to update device')
    console.log(e)
    accessDeniedResponse(e, res);
  }
})

requestRouter.delete('/devices/:id', async (req, res)=>{
  try{
    memberApiSecurityCheck(req);
    const deletedDevice = await Device.findByPk(req.params.id);
    const { requestId } = deletedDevice 
    await deletedDevice.destroy();
    const devices = await Device.findAll({where: {requestId}});
    res.send(devices);
  }
  catch(e){
    console.log(e)
    accessDeniedResponse(e, res);
  }
})

requestRouter.delete('/request/:id', async (req, res)=>{
  try{
    memberApiSecurityCheck(req);
    const deletedReq = await Request.findByPk(req.params.id);
    await deletedReq.destroy();
    await Device.destroy({ where: { requestId: null } })
    const requests = await Request.findAll();
    const devices = await Device.findAll();
    res.send({requests, devices});
  }
  catch(e){
    console.log(e)
    accessDeniedResponse(e, res);
  }
})

requestRouter.post('/upload',async (req, res)=> {
  if(req.files===null){
    return res.status(400).json({message: 'No File Uploaded'})
  } 
  // const file = req.files.myFile;
  try{
  const { name, data } = req.files.myFile;

  const createdFile = await Upload.create({ name, data });
  res.sendStatus(201)
  }
  catch(e){
    console.log(e)
    console.log('failed to upload file')
  }
  // file.mv(`${__dirname}../`, err =>{
  //   if(err){
  //     console.error(err);
  //     return res.status(500).send(err);
  //   } 
  //   res.json({fileName: file.path, filePath: `uploads/${file.name}`})
  // })
})

requestRouter.get('/upload',async (req, res)=> {
  try{
  const files = await Upload.findAll()
  res.send(files)
  }
  catch(e){
    console.log(e)
    console.log('failed to get files')
  }
})



module.exports={
  path: '/req',
  router: requestRouter
}