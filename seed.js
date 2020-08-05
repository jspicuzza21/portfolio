const chalk = require('chalk');
const { sync } = require('./server/db/index');
const { models: { User } } = require('./server/db/models/index');

const users = [
  {
    email: 'admin',
    name: 'admin',
    password: '!nvestig8',
    department: 'SCPO',
    role: 'admin',
  },
  {
    email: 'member',
    name: 'member',
    department: 'Local PD',
    password: '!nvestig8',
    role: 'member',
  },
  
]

const seed = async () => {
  try {
    users.map(user => {
      return User.create(user);
    });
    
    console.log(chalk.green('DB SEEDED'));

  } catch (e) {
    console.log(chalk.red('ERROR SEEDING DB'), e)
  }
}

sync(true)
  .then(() => seed())
  .catch(console.log)