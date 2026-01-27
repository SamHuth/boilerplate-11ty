## About this project

This project is a statically generated website built with eleventy https://www.11ty.dev/

Pages are generated from markdown files

_data contains .json files with core information available globally

_includes contains project njk files for templates, layouts and partials

each web page markdown file has frontmatter with the following (%% denotes dummy text):
---
layout: %%%%.njk
title: Example Page title
meta:
  description: "Example description"
date: Last Modified
---

layout = page layout file in _includes/layouts
title = page title, used for H1 and document title
date = Last Modified is generated at build time




# Files/Folders excluded from eleventy generation
- CLAUDE.md
- /claude-context/


## Design Inspiration