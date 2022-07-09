/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSlugsInput = {
  id?: string | null,
  slug?: string | null,
  _version?: number | null,
};

export type ModelSlugsConditionInput = {
  slug?: ModelStringInput | null,
  and?: Array< ModelSlugsConditionInput | null > | null,
  or?: Array< ModelSlugsConditionInput | null > | null,
  not?: ModelSlugsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Slugs = {
  __typename: "Slugs",
  id: string,
  slug?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateSlugsInput = {
  id: string,
  slug?: string | null,
  _version?: number | null,
};

export type DeleteSlugsInput = {
  id: string,
  _version?: number | null,
};

export type ModelSlugsFilterInput = {
  id?: ModelIDInput | null,
  slug?: ModelStringInput | null,
  and?: Array< ModelSlugsFilterInput | null > | null,
  or?: Array< ModelSlugsFilterInput | null > | null,
  not?: ModelSlugsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSlugsConnection = {
  __typename: "ModelSlugsConnection",
  items:  Array<Slugs | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateSlugsMutationVariables = {
  input: CreateSlugsInput,
  condition?: ModelSlugsConditionInput | null,
};

export type CreateSlugsMutation = {
  createSlugs?:  {
    __typename: "Slugs",
    id: string,
    slug?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateSlugsMutationVariables = {
  input: UpdateSlugsInput,
  condition?: ModelSlugsConditionInput | null,
};

export type UpdateSlugsMutation = {
  updateSlugs?:  {
    __typename: "Slugs",
    id: string,
    slug?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteSlugsMutationVariables = {
  input: DeleteSlugsInput,
  condition?: ModelSlugsConditionInput | null,
};

export type DeleteSlugsMutation = {
  deleteSlugs?:  {
    __typename: "Slugs",
    id: string,
    slug?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetSlugsQueryVariables = {
  id: string,
};

export type GetSlugsQuery = {
  getSlugs?:  {
    __typename: "Slugs",
    id: string,
    slug?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListSlugssQueryVariables = {
  filter?: ModelSlugsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSlugssQuery = {
  listSlugss?:  {
    __typename: "ModelSlugsConnection",
    items:  Array< {
      __typename: "Slugs",
      id: string,
      slug?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSlugsQueryVariables = {
  filter?: ModelSlugsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSlugsQuery = {
  syncSlugs?:  {
    __typename: "ModelSlugsConnection",
    items:  Array< {
      __typename: "Slugs",
      id: string,
      slug?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateSlugsSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSlugsSubscription = {
  onCreateSlugs?:  {
    __typename: "Slugs",
    id: string,
    slug?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateSlugsSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSlugsSubscription = {
  onUpdateSlugs?:  {
    __typename: "Slugs",
    id: string,
    slug?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteSlugsSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSlugsSubscription = {
  onDeleteSlugs?:  {
    __typename: "Slugs",
    id: string,
    slug?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
