# GitHub Pages Deployment Setup

This document explains how the SKILL BRIDGE website is deployed to GitHub Pages.

## Deployment Configuration

The website is automatically deployed to GitHub Pages using GitHub Actions whenever changes are pushed to the `master` branch.

### GitHub Actions Workflow

The workflow is defined in `.github/workflows/deploy.yml` and performs the following steps:

1. Checks out the code
2. Sets up Node.js environment
3. Installs dependencies
4. Builds the Next.js application with static export
5. Deploys the output to the `gh-pages` branch

### Next.js Configuration

The Next.js configuration in `frontend/next.config.js` is set up for static exports with:

```javascript
{
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
}
```

### Custom Domain

The site is configured to use the custom domain `sb.itsmemnc.com`. This is done by:

1. Creating a `CNAME` file in the `frontend/public` directory
2. Adding the custom domain in the GitHub Pages settings
3. Configuring DNS settings for the domain to point to GitHub Pages

### DNS Configuration

For the custom domain to work properly, the DNS settings should be configured as follows:

| Type  | Host | Value                    |
|-------|------|--------------------------|
| A     | sb   | 185.199.108.153          |
| A     | sb   | 185.199.109.153          |
| A     | sb   | 185.199.110.153          |
| A     | sb   | 185.199.111.153          |
| CNAME | www  | nikhil9989.github.io     |

## Troubleshooting

If you encounter issues with the deployment, check:

1. GitHub Actions workflow runs (look for errors in the Actions tab)
2. GitHub Pages settings in repository settings
3. Custom domain DNS configuration
4. The `gh-pages` branch content to ensure it contains the correct files

## Manual Deployment

If needed, you can manually deploy the site by:

1. Building the project with `npm run build` in the frontend directory
2. Copying the contents of the `out` directory to the `gh-pages` branch
3. Ensuring the `CNAME` file is present in the root of the `gh-pages` branch
