import AWS from "aws-sdk";

AWS.config.region = "us-east-1";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-1:f81f99c1-ed34-43b9-aba0-4e7555152c05",
});

export default new AWS.Lambda();
