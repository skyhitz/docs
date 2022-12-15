---
sidebar_position: 2
---

## Branches

Our default GitHub branch is the `master` branch. It is set up to be automatically deployed with a production environment on `https://api.skyhitz.io`.
We also have a `staging` branch, which is set up to be automatically deployed with the staging environment on `https://spi.skyhitz.io`.
Both branches are protected and require pull requests.
If you want to create a new branch prefix it with `feature/` or `fix/` depending on the details of the ticket.

Summary:

- `master` - default and production branch. Protected.
- `staging` - staging branch. Protected.
- `feature/*` - feature branches.
- `fix/*` - branches with fixes.

## Continous Integration

We had a few checks set up that run on each pull request to the protected branch.

- `ci` - checks types, linting, and formatting.
- `vercel` - builds and deploys server using vercel preview deployment

To merge pull requests to a protected branch, the following things are required:

- pull request has to be approved
- all checks have to pass
- there must be no conflicts with the protected branch

## Releasing a new version

In order to release a new version of the API to production, follow these steps:

1. Use a staging environment to test whether the API is bug-free.
2. Create a pull request from `staging` branch to `master` branch

## Cron job

We have a cron job specified that runs on GitHub action once each day. It updates entries ranking to display the `Tob Beats` list properly. It uses the `update-ranking.js` script.
