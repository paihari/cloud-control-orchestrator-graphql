import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import awsSDK from 'aws-sdk';
import { AwsApiParser } from 'graphql-compose-aws';

const awsApiParser = new AwsApiParser({
  awsSDK,
});

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      // Full API
      //aws: awsApiParser.getFieldConfig(),

      // Partial API with desired services
      awsS3: awsApiParser.getService('s3').getFieldConfig(),
      awsEC2: awsApiParser.getService('ec2').getFieldConfig(),
      awsApigateway: awsApiParser.getService('apigateway').getFieldConfig(),

    },
  }),
});

