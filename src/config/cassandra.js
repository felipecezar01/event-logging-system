const cassandra = require('cassandra-driver');
require('dotenv').config();

const client = new cassandra.Client({
    contactPoints: [process.env.CASSANDRA_HOST],
    localDataCenter: 'datacenter1',
    keyspace: 'event_logs'
});

module.exports = client;
