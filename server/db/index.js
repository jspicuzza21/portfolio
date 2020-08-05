const { db, models} = require('./models/index');
const chalk = require('chalk');

const sync=async(force = false) => {
  try{
    await db.sync({force})
    console.log(chalk.blueBright('DB Sync Successfull', `force: ${force}`))
  }
  catch(e){
    console.log(chalk.redBright('DB Sync failed'))
    console.log(e)
  }
}

module.exports={
  db, 
  models,
  sync,
};