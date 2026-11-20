# Free Domains and Hosting: A Practical Guide

A platform-provided subdomain can be free, while a custom domain you own usually costs money. Always check current terms, quotas and pricing before publishing.

## Free platform subdomains

| Platform | Typical free address | Best for |
| --- | --- | --- |
| GitHub Pages | `username.github.io` or `username.github.io/project` | Static sites hosted from GitHub repositories |
| Cloudflare Pages | `project.pages.dev` | Static sites and supported frontend builds |
| Netlify | `project.netlify.app` | Static sites and frontend deployments |

These are examples, not guarantees of permanent availability or unlimited use.

## Publish with GitHub Pages
1. Push static website files to a GitHub repository.
2. Open repository **Settings → Pages**.
3. Under Build and deployment, choose **Deploy from a branch**.
4. Select branch `main` and folder `/(root)`, then save.
5. Wait for deployment and open the URL shown in Pages settings.

Expected project URL after Pages is enabled: `https://shanraku.github.io/json-formatter-validator/`.

Official documentation: https://docs.github.com/en/pages

## Connect a custom domain
1. Register a domain through a registrar (registration and renewal may cost money).
2. Add the domain in your hosting provider's custom-domain settings.
3. Configure DNS records exactly as the provider instructs.
4. Wait for DNS propagation and complete domain verification.
5. Enable HTTPS and verify the site loads securely.

Use DNS values shown for your own project; do not copy records from an unrelated tutorial.

## Important limitations
- Free plans have usage limits, acceptable-use rules and feature restrictions.
- A free subdomain is not ownership of a custom domain.
- Domain registration, renewal, premium DNS and some add-ons may be paid.
- Availability, plan names and pricing change; verify official provider pages.

## Official resources
- GitHub Pages: https://pages.github.com/
- GitHub Pages docs: https://docs.github.com/en/pages
- Cloudflare Pages: https://pages.cloudflare.com/
- Netlify: https://www.netlify.com/
