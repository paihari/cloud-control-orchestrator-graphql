import * as core from "oci-core";
import common = require("oci-common");

import { InstanceTC } from './instance';
import { schemaComposer } from 'graphql-compose';


const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();
const client = new core.ComputeClient({ authenticationDetailsProvider: provider });

schemaComposer.Query.addFields({
  ociInstance
  : {
    type: InstanceTC,
    args: {
      instanceid: `String!`, // equals to `new GraphQLNonNull(GraphQLInt)`
    },
    resolve: async (_, args) => {
    // Create a request and dependent object(s).
    const getInstanceRequest: core.requests.GetInstanceRequest = {
      instanceId: args.instanceid
    };
    return await client.getInstance(getInstanceRequest);
    },
      
  },
});

export const schema = schemaComposer.buildSchema();
