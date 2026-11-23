# leoromanovsky.com

Source for my blog at [leoromanovsky.com](https://leoromanovsky.com/).

Built with [Jekyll](https://jekyllrb.com) 4 and deployed by GitHub Actions
(`.github/workflows/pages.yml`) on every push to `main`. Pull requests get a
build check but are not deployed.

## Writing

Add a Markdown file to `_posts/` named `YYYY-MM-DD-slug.md`:

```markdown
---
title: "Post title"
description: "One-line summary used for SEO and social cards"
---

Post body…
```

Work-in-progress posts go in `_drafts/` (no date in the filename) and only
render locally with `--drafts`. `_drafts/style-guide.md` exercises every
element of the theme.

## Projects and navigation

- `_data/projects.yml` — entries on `/projects/`; `featured: true` also shows one on the home page
- `_data/nav.yml` — header links

## Theme

Hand-rolled, no theme gem: `_layouts/`, `_includes/`, and plain CSS in
`assets/css/main.css` (colors are CSS variables at the top, with a dark
palette). The topographic background is `assets/img/contours.svg`.

## Running locally

Needs Ruby 4.0 (see `.ruby-version`):

```bash
bundle install
bundle exec jekyll serve --livereload --drafts
```

Or with Docker, no local Ruby needed:

```bash
docker run --rm -it -p 4000:4000 -v "$PWD":/site -w /site ruby:4.0 \
  sh -c "bundle install && bundle exec jekyll serve --host 0.0.0.0 --livereload"
```
