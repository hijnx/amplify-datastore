import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum PostStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED"
}



export declare class Message {
  readonly id: string;
  readonly title: string;
  readonly color?: string;
  readonly createdAt?: string;
  constructor(init: ModelInit<Message>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly status: PostStatus | keyof typeof PostStatus;
  readonly rating?: number;
  readonly content?: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}