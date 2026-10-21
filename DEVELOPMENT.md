# Development & deployment

## Local development

Use Node.js 22 and pnpm 10.10.0 (the version specified in `package.json`).

```bash
git clone https://github.com/ish-codes-magic/ishita-portfolio.git
cd ishita-portfolio
pnpm install --frozen-lockfile
pnpm dev
```

The development server runs at [http://localhost:1408](http://localhost:1408).

No environment variables are required for the portfolio. To override the canonical site URL locally, set `APP_URL` in an untracked `.env.local` file. The default is `https://ishita-codes-ai.in`.

## Checks and production build

```bash
pnpm lint
pnpm check-types
pnpm build
pnpm start
```

Stop the development server before running the production build; both use the `.next` directory. `pnpm start` serves the production build on port 3000.

## One-time Vercel setup

1. Create or select the Vercel project for this repository. Use the Next.js framework preset, repository root directory, and Node.js 22.x.
2. Add the production domain `ishita-codes-ai.in` to that project. If using another domain, set `APP_URL` in Vercel’s **Production** environment and update `USER.website` in `src/data/user.ts`.
3. Get the project’s **Project ID** and the account/team **ID** from Vercel settings. Alternatively, run `pnpm dlx vercel@65.0.0 link` locally; `.vercel/project.json` contains `projectId` and `orgId`. The `.vercel` directory is gitignored.
4. Create a Vercel access token at [vercel.com/account/tokens](https://vercel.com/account/tokens), scoped to the account/team containing the project.
5. In GitHub, open **Settings → Secrets and variables → Actions** and add these repository secrets:

   | Secret              | Value                     |
   | ------------------- | ------------------------- |
   | `VERCEL_TOKEN`      | Vercel access token       |
   | `VERCEL_ORG_ID`     | Account/team ID (`orgId`) |
   | `VERCEL_PROJECT_ID` | Project ID (`projectId`)  |

The workflow uses the `production` GitHub environment. No manual approval is required unless you configure environment protection rules yourself.

`vercel.json` disables Vercel’s automatic Git deployments for all branches. This makes the version-tag workflow the deployment trigger, including when the repository remains connected through Vercel’s GitHub integration. Deploy hooks or other external automation, if configured separately, should also be disabled if all deployments must be tag-controlled.

## Release to production

First push the intended commits to `main`, then create a **new** version tag:

```bash
git switch main
git pull --ff-only origin main
git push origin main
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

For the next release, use `v1.0.1` (or the next appropriate version). Do not move or reuse an existing release tag.

The workflow at `.github/workflows/deploy-vercel.yml`:

1. Runs only on pushed tags matching `v*.*.*`; branch pushes and pull requests do not trigger deployment.
2. Requires the exact `vMAJOR.MINOR.PATCH` format and checks that the tagged commit is on `main`.
3. Installs locked dependencies, runs lint, and checks TypeScript.
4. Pulls the Vercel production settings and environment variables.
5. Builds production artifacts with `vercel build --prod`.
6. Deploys those artifacts with `vercel deploy --prebuilt --prod`, avoiding a second build on Vercel.
7. Records the deployment URL in the Actions summary and the GitHub `production` environment.

Check the **Actions** tab for progress. Production deploys are serialized, and a running deploy is not cancelled by a newer tag. GitHub may replace an older pending run when several tags are pushed in quick succession, so release one tag at a time.

To retry a transient failure, rerun the failed workflow from the Actions tab. To roll back, use Vercel’s deployment dashboard to promote a previously working production deployment.

## Optional component registry

The original template’s shadcn registry tooling is available under `src/registry/` and through the `registry:internal:build` and `registry:build` scripts. It is independent of the portfolio release workflow.
