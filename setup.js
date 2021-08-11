const { DynamoDBClient, CreateTableCommand, ListTablesCommand } = require('@aws-sdk/client-dynamodb');

const { AWS_DEFAULT_REGION } = process.env;

const config = {
    region: AWS_DEFAULT_REGION,
};

const client = new DynamoDBClient(config);

const create = async () => {
    try {

        const params = {
            AttributeDefinitions: [
                {
                    AttributeName: 'id',
                    AttributeType: 'S',
                }
            ],
            KeySchema: [
                {
                    AttributeName: 'id',
                    KeyType: 'HASH',
                }
            ],
            BillingMode: 'PAY_PER_REQUEST',
            TableName: 'apex-up-aws-sdk-v3-bug-example',
            StreamSpecification: {
                StreamEnabled: false,
            },
        };

        return await client.send(new CreateTableCommand(params));
    } catch (error) { }
}

const list = async () => {
    try {
        return await client.send(new ListTablesCommand({}));
    } catch (error) {
        console.error(error);
    }
}

const main = async () => {
    await create();
    console.log(await list());
}

main();