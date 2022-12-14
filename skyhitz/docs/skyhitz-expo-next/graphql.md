---
sidebar_position: 2
---

## Graphql

To add graphql query/mutation simply create file in the proper folder:

- `packages/app/api/queries/your_query.graphql` for queries
- `packages/app/api/mutations/your_mutation.graphql` for mutations

Then run the following script and let codegen generate graphql types for you:

```sh
yarn graphql:gen
```
