/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSlugs = /* GraphQL */ `
  query GetSlugs($id: ID!) {
    getSlugs(id: $id) {
      id
      slug
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listSlugss = /* GraphQL */ `
  query ListSlugss(
    $filter: ModelSlugsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSlugss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        slug
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSlugs = /* GraphQL */ `
  query SyncSlugs(
    $filter: ModelSlugsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSlugs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        slug
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
