const express    = require('express');
const cluster    = require('cluster');
const path       = require('path');
const apis       = require('./apis');
const config     = require('./config');
const middleware = require('./middleware');

const PORT = process.env.PORT || config.CONSTANTS.PORT;

const numCPUs = require('os').cpus().length;

const isDev = process.env.NODE_ENV !== 'production';

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    const pid = worker.process.pid;
    console.error(`Node cluster worker ${pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  middleware.install(app);
  apis.register(app);

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../ui/build')));

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    const processMsg = isDev ? 'dev server' : 'cluster worker ' + process.pid;
    console.error(`Node ${processMsg}: listening on port ${PORT}`);
  });
}
