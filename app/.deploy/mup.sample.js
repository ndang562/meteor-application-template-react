module.exports = {
  servers: {
    one: {
      host: 'your_droplet_ipv4_address',
      username: 'root',
      password: 'your_root_password'
    }
  },
  app: {
    name: 'meteor-react-bootstrap-template',
    path: '../',
    servers: { one: {}, },
    buildOptions: { serverOnly: true },
    env: {
      ROOT_URL: 'https://your_droplet_ipv4_address',
      MONGO_URL: 'mongodb://mongodb/meteor',
      MONGO_OPLOG_URL: 'mongodb://mongodb/local',
    },
    docker: { image: 'zodern/meteor:latest' },
    enableUploadProgressBar: true
  },
  mongo: { version: '5.0', servers: { one: {} } }
};
