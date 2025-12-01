# Kenny Stephenson Chapman LLP

Website for Kenny Stephenson Chapman LLP, a full-service law firm in Waterford, Ireland.

## Development

Built with [Hugo](https://gohugo.io/). Run locally:

```bash
hugo server
```

Build for production:

```bash
hugo
```

## Deployment

Deployed via [Netlify](https://netlify.com). Pushes to `main` trigger automatic builds.

### Environment Variables

Set in Netlify dashboard:

| Variable | Description |
|----------|-------------|
| `HUGO_WEB3FORMS_ACCESS_KEY` | API key for contact form |

## Content Management

Content is managed via [Decap CMS](https://decapcms.org/) at `/admin/`.

### Editing Content

- **Staff bios**: Edit markdown files in `content/` or via CMS
- **Company details**: Edit `data/company.yml`
- **Staff directory**: Edit files in `data/authors/`

## Project Structure

```
content/          # Page content (markdown)
data/             # Site data (company info, authors)
layouts/          # Hugo templates
assets/sass/      # SCSS stylesheets
static/           # Static files (images, JS, uploads)
```
