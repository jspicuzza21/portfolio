const { Router } = require('express');
const { models:{ User, Request, Device } }= require('../../db/index');

const requestRouter = Router();

requestRouter.post('/request', async (req, res) => {
  try {
    const { caseNumber, crime, urgency, userId } = req.body;
    const createdReq = await Request.create({ caseNumber, crime, urgency, userId });
    res.status(201).send(createdReq)
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
})

module.exports={
  path: '/req',
  router: requestRouter
}