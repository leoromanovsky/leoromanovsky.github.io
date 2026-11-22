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

## Running locally

Needs Ruby 4.0 (see `.ruby-version`):

```bash
bundle install
bundle exec jekyll serve --livereload
```

Or with Docker, no local Ruby needed:

```bash
docker run --rm -it -p 4000:4000 -v "$PWD":/site -w /site ruby:4.0 \
  sh -c "bundle install && bundle exec jekyll serve --host 0.0.0.0 --livereload"
```
