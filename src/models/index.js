// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Username } = initSchema(schema);

export {
  User,
  Username
};