---
sidebar_position: 3
---

## Branches

Our default GitHub branch is `master` branch. It is set up to be automatically deployed with a staging environment on `https://skyhitz-expo-next.vercel.app`.
We also have `prod` branch, which is set up to be automatically deployed with the production environment on `https://skyhitz.io`.
Both branches are protected and require pull requests.
If you want to create a new branch prefix it with `feature/` or `fix/` depending on the details of the ticket.

Summary:

- `master` - default and staging branch. Protected.
- `prod` - production branch. Protected.
- `feature/*` - feature branches.
- `fix/*` - branches with fixes.

## Continous Integration

We had a few checks set up that run on each pull request to the protected branch.

- `ci` - checks types, linting, and formatting.
- `expo-preview` - generates expo preview
- `vercel` - builds and deploys app using vercel preview deployment

To merge pull requests to protected branch, the following things are required:

- pull request has to be approved
- all checks have to pass
- there must be no conflicts with the protected branch

## Releasing a new version

In order to release a new version of the app to production, follow these steps:

1. Use a staging environment to test whether the app is bug-free.
2. Create a new branch `release/<version>` and bump versions in `app.json` file.
3. Merge this branch to `master`
4. Schedule new builds using eas. In the `apps/expo` directory run the following command:

```sh
eas build --platform all --profile production
```

5. Create a pull request from `master` branch to `prod` branch
6. Upload the build to the stores
