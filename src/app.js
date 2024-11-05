const express = require('express');
const client = require('./config/cassandra');

const app = express();
const PORT = process.env.PORT || 3000;

client.connect()
    .then(() => console.log('Connected to Cassandra'))
    .catch(err => console.error('Connection failed', err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
