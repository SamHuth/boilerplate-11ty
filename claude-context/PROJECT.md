# About this project

## Technology
### Eleventy
This project uses the static site generator [Eleventy](https://www.11ty.dev/docs/). 
- The Markdown Attributes plugin is installed to add custom attributes to the html output. This is used by adding curly braces at the end of the line with the desired attributes inside.
  Example: ## Heading 2{id="one" data-key="1234"}

## Eleventy Project Core Files

data folder
any json files in this folder can be access globally
for example site.json has an object of { 'name': { 'first': 'test'} }.. This can be displayed in an .njk file like this: {{ site.name.first }}

- site.json
	- basic website information used primarily for SEO markup
		- includes/partials/schema_data.njk
		- includes/partials/meta_data.njk

includes folder
- Partials
	- Repeated elements (header, footer, nav)
	- Metadata
	- Schema data
	- 
- Layouts
	- page.njk is default

## Website Pages

Each web page markdown file has frontmatter with the following:

layout: page.njk
title: "Example Page title"
meta:
	description: "Example description"
date: Last Modified

layout = page layout file in _includes/layouts
title = page title, used for H1 and document title
date = Last Modified is generated at build time

tags can be added in here too to create eleventy collections

Content for each page is strictly markdown. Avoid using raw html in the .md file if possible. Prompt if required to use html tags.


## CSS Methodology
This website uses the HUG css methodology. This is to keep specificity low and have most of the styles handled by classless selectors.

main.css is the target file in the html, and this imports 4 layers as part of the methodology.
1. Reset layer (reset.css): A set of rules to improve on browser defaults. Never modify this file.
2. HTML layer (html.css): Classless selectors for base html styling
3. Utility layer (utility.css): To tweak specific elements where required
4. Group layer (group.css): To simplify styling for collections of complex elements 

use kebab-case for all classes