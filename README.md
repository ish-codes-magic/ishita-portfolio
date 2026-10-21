# Ishita Pal — AI engineering & safety

My portfolio, featuring work in production AI, AI safety and alignment, and machine learning research.

**Website:** [ishita-codes-ai.in](https://ishita-codes-ai.in)

Built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui. The site includes responsive light and dark themes, expandable experience and project details, and locally generated social-sharing images.

## Run locally

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open [localhost:1408](http://localhost:1408).

## Update content

- Profile and biography: `src/data/user.ts`
- Experience, AI safety research, projects, awards, certifications, and tools: `src/features/profile/data/`
- Homepage sections: `src/features/profile/components/portfolio/`
- Site colors and shared styles: `src/styles/globals.css`
- Portrait: `public/images/ishita-avatar-ghibli.jpg`

## Production releases

Production deployment is triggered by pushing a new version tag, such as `v1.0.0`, for a commit on `main`. The workflow runs lint and type checks, builds once, and deploys the prebuilt output to Vercel. Regular branch pushes do not deploy.

See [Development & deployment](DEVELOPMENT.md) for the one-time Vercel setup, required GitHub secrets, and release commands.

## Acknowledgments

Originally based on [ncdai’s portfolio](https://github.com/ncdai/chanhdai.com). Thanks to the maintainers of Next.js, React, Tailwind CSS, shadcn/ui, Radix UI, Lucide, and the other open-source libraries used in this project.
