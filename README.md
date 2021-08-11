## Install Dependencies
```
yarn
```

## Setup Test Table
```
yarn setup
```

## Deploy Test App
```
yarn deploy
```

## Test Deployed App
```
yarn test
```

you should see some result with the "apex-up-aws-sdk-v3-bug-example" table in the array

## Checkout the broken example
```
git checkout broken
```

## Deploy Test App (broken)
```
yarn deploy
```

## Test Deployed App (broken)
```
yarn test
```

### The remedy for this issue can be seen in [index.js](./index.js):
```
delete process.env['AWS_PROFILE'];
```
If the environment variable "AWS_PROFILE" exists V3 AWS-SDK will fail to load credentials.