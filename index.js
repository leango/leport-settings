var lepass = require('lepass-settings');
var settings = module.exports = {
  env: {
    NODE_ENV: 'development',
    PORT: 3008,
    BINDIP: "0.0.0.0"
  },
  title: '',
  lepass_root_url: lepass.root_url,
  hostname: 'localhost',
  auth_prefix: '/auth',
  controller_prefix: '/controller',
  session_name: 'hwEyBWJX',
  session_secret: 'QysQcRcr',
  session_store: 'connect-mongo',
  session_store_settings: {
    url: 'mongodb://localhost:27017/leport'
  },
  client_id: 'leport',
  client_secret: '2zBR8KSn',

  mongo: {
    url: 'mongodb://localhost:27017/leport'
  }

};

settings.root_url = 'http://' + settings.hostname;
if (settings.env.PORT && settings.env.PORT !== 80) {
  settings.root_url += ':' + settings.env.PORT;
}
settings.cookie_secret = settings.session_secret;
