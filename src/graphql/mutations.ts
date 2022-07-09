/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSlugs = /* GraphQL */ `
  mutation CreateSlugs(
    $input: CreateSlugsInput!
    $condition: ModelSlugsConditionInput
  ) {
    createSlugs(input: $input, condition: $condition) {
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
export const updateSlugs = /* GraphQL */ `
  mutation UpdateSlugs(
    $input: UpdateSlugsInput!
    $condition: ModelSlugsConditionInput
  ) {
    updateSlugs(input: $input, condition: $condition) {
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
export const deleteSlugs = /* GraphQL */ `
  mutation DeleteSlugs(
    $input: DeleteSlugsInput!
    $condition: ModelSlugsConditionInput
  ) {
    deleteSlugs(input: $input, condition: $condition) {
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
