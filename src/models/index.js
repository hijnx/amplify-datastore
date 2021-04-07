// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostStatus = {
  "DRAFT": "DRAFT",
  "PUBLISHED": "PUBLISHED"
};

const { Message, Post } = initSchema(schema);

export {
  Message,
  Post,
  PostStatus
};