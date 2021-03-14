const config = require('config');
const app = require('./private/app');

const port = process.env.PORT || config.get('port');
app.listen(port, () => console.log(`server is running ${port}`));
