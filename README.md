This project is configured with dynamoose.

## How to use it

First open the `main.ts` file and update the credentials with your own aws credentials.

```typescript
dynamoose.aws.sdk.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'REGION_NAME',
});
```

Now you can run the project using the following command

```bash
yarn start
```
