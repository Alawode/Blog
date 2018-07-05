let env = process.env.NODE_ENV || 'development';

console.log(`Env is ${env}`);

if(env === 'development' || env === 'test'){
  let conf = require('./config.json');

  let envConfig = conf[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
