import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Slugs {
  readonly id: string;
  readonly slug?: string | null;
  constructor(init: ModelInit<Slugs>);
  static copyOf(source: Slugs, mutator: (draft: MutableModel<Slugs>) => MutableModel<Slugs> | void): Slugs;
}