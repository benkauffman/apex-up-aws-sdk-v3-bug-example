const express = require('express')
require('express-async-errors');

const { DynamoDBClient, ListTablesCommand } = require('@aws-sdk/client-dynamodb');

const app = express();

const { PORT = 5000, AWS_DEFAULT_REGION, AWS_PROFILE } = process.env;

const config = {
    region: AWS_DEFAULT_REGION,
};

const client = new DynamoDBClient(config);

app.get('/', async (req, res) => {
    console.log({ AWS_PROFILE });
    const { TableNames } = await client.send(new ListTablesCommand({}))
    res.json(TableNames);
})

app.listen(PORT, () => {
    console.log(`Example app listening on ${PORT}`)
})