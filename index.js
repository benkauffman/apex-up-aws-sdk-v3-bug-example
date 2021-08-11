// this is a hack because apex up injects this environment variable and V3 AWS SDK doesn't like it
delete process.env['AWS_PROFILE'];
require('./src/server');