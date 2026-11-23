---
title: "A field guide to this site's typography"
description: "A draft post that exercises every element, used to check the theme locally. Never published."
tags: [meta]
---

This draft lives in `_drafts/`, so it only shows up when you run `jekyll serve --drafts`. Use it to check how things look.

## Headings, lists, and quotes

Paragraph text uses Newsreader with optical sizing. Here's a [link](https://jekyllrb.com), some **bold**, some *italic*, and some `inline code`.

- An unordered list item
- Another one, long enough to wrap onto a second line so you can check the hanging indent.

1. First
2. Second

> A blockquote looks like this, set in italic with an accent rule.

### A third-level heading

| Metric | Before | After |
|---|---:|---:|
| Build time | 41s | 23s |
| Jekyll | 3.10 | 4.4 |

---

```ruby
# Code is highlighted by Rouge
def greet(name)
  puts "Hello, #{name}"
end
greet("world") # => 42 bytes later
```

A sentence with a footnote.[^1]

[^1]: Footnotes collect at the bottom of the post.
