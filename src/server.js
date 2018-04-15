const express = require('express');
const routes = require('./routes');
const logger = require('./core/logger');

const app = express();
const port = process.env.PORT || process.env.port || 3000;

app.use('/', routes);

app.use((req, res) => res.status(404).send('Invalid Route'));

app.listen(port, () => {
  logger.info(`API running on port ${port}`);
});
