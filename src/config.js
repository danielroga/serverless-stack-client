export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HE2PiCqAhhWVq2YesJ3YUPDrw2YHrxZGEY7pM0MswWAqGN8uQbr7SI9jfrluTzI9wTox8jQa23s0WldwpUhhZRW00sPpVufmv",
    s3: {
      REGION: "us-east-1",
      BUCKET: "dans-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://ps8zg66r9d.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_Ng5CNobGJ",
      APP_CLIENT_ID: "1td6ali6m7i2llnaiae0779svr",
      IDENTITY_POOL_ID: "us-east-1:67e94cf6-c8da-443f-bbb8-f890bb135414"
    }
  };