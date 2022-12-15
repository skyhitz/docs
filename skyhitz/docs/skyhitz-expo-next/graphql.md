---
sidebar_position: 2
---

## Graphql

To add graphql query/mutation simply create a file in the proper folder:

- `packages/app/api/queries/your_query.graphql` for queries
- `packages/app/api/mutations/your_mutation.graphql` for mutations

We had a config file for the generator placed here: `packages/app/codegen.yaml`.
What you might want to change there is the schema URL which is set for localhost.
It's the most convenient if you are changing schema in the backend repository at the same time.
In such a case just run the backend server locally and then run the following script and let codegen generate graphql types for you:

```sh
yarn graphql:gen
```

After that you might want to format this file using prettier:

```sh
yarn prettier -w packages/app
```
