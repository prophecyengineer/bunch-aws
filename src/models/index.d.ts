import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly userFullName?: string | null;
  readonly userBio?: string | null;
  readonly userImage?: string | null;
  readonly tokenStream?: string | null;
  readonly tokenStripe?: string | null;
  readonly Username?: Username | null;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Username {
  readonly id: string;
  readonly username?: string | null;
  constructor(init: ModelInit<Username>);
  static copyOf(source: Username, mutator: (draft: MutableModel<Username>) => MutableModel<Username> | void): Username;
}